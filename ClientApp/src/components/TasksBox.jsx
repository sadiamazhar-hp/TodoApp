import React,{Component} from "react";
import {Box,Button,Typography } from "@mui/material";
import { Inputs } from "./Input";
import Tasks from "./Tasks";
export class TasksBox extends Component {
    static displayName = TasksBox.name;

    constructor(props) {
        super(props);
        this.state = {taskList:[], loading: true}
    }

    componentDidMount() {
        this.populateTaskData();

    }
    static renderTaskList(taskList) {
        const Heading = { top: '-30px', width: '50px', position: 'relative', textDecoration: 'underline 1.5px' };
        const Task = { ...Heading, left: '30%' }
        const Time = { ...Heading, left: '80%', top: '-60px' }

        return (
            <Box sx={{
                height: '65vh', background: '#D7E0E5', overflowY: 'scroll',
                margin: '10px', borderRadius: '15px', position: 'relative'
            }}>
                <img src='./pin.png' alt='pin' style={{
                    height: '50px', width: '60px', display: 'flex', flexDirection: 'column',
                    position: 'relative', top: '0%', left: '-5%'
                }} />
                <Typography sx={Task}>Tasks</Typography>
                <Typography sx={Time}>Time</Typography>
                {taskList.map(task =>
                    <Tasks taskId={task.ID} text={task.Text} status={task.Status} />
                )
                }
            </Box>
        )
    }
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : TasksBox.renderTaskList(this.state.taskList);
        return (
            <Box>
                {contents }
            </Box>
        )
    }
    async populateTaskData() {
        const response = await fetch('todo');
        console.log(response);
        const data = await response.json();
        console.log(data)
        this.setState({ taskList: data, loading: false });
    }
}