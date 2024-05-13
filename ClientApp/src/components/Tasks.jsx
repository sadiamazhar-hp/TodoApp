import React, { Component } from "react";
import { Box, Input, styled, Button, Typography } from "@mui/material";
import axios from "axios";

const StyledCheckbox = styled("input")({
    appearance: "none",
    width: 20,
    height: 20,
    borderRadius: 4,
    border: "2px solid #555",
    outline: "none",
    cursor: "pointer",
    "&:checked": {
        backgroundColor: "#14284e",
    },
});

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: this.props.status,
            isEditing: false,
            editText: props.text,
            Id:props.taskId,
            editTime: props.Time,
        };
    }

    toggleCheckboxChange = () => {
        this.setState(({ isChecked }) => ({
            isChecked: !isChecked,

        })
            , () => {
                this.datatobackend(); // Call datatobackend after updating isChecked state
        });
    };

    handleEditClick = () => {
        this.setState({ isEditing: true });
    };
    handleInputTime = (e) => {
        this.setState({ editTime: e.target.value }); 
    }
    handleInputChange = (e) => {
        const value = (e.target.value);
        this.setState({ editText: value }, () => {
            this.datatobackend();
        });
    };

    handleInputBlur = () => {
        this.setState({ isEditing: false });
        // Call a function to update the task text in the parent component
        // For example, this.props.onEdit(this.state.editText);
    };
    datatobackend = () => {
        const { editText, isChecked, Id } = this.state;

        //prepare data to send back to the backend
        const requestdata = {
            ID: Id,
            Text: editText,
            Status: isChecked // Use isChecked directly here
        };

        //send data to backend using axios
        axios.post("/todo/taskback", requestdata)
            .then((response) => {
                // Handle successful response (if needed)
                console.log(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error("Error:", error);
            });
      /* fetch(“...”)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result
          });
        } 
      );*/
    }

    render() {
        const { isChecked, isEditing, editText, editTime } = this.state;
        const commonStyles = {
            width: "55%", left: "8%", left: "5%",position:'relative',
            display: "inline-block", // Set display to inline-block
            verticalAlign: "middle", };
        return (
            <Box>
                <StyledCheckbox
                    type="checkbox"
                    checked={isChecked}
                    onChange={this.toggleCheckboxChange}
                />
                {isEditing ? (
                    <Input
                        value={editText}
                        onChange={this.handleInputChange}
                        onBlur={this.handleInputBlur}
                        autoFocus
                        sx={commonStyles}
                    />
                ) : (
                    <Typography sx={commonStyles}>{editText}</Typography>
                )}
                <Button
                    onClick={this.handleEditClick}
                    sx={{
                        left: "8%",
                        "@media (max-width: 600px)": {
                            left: "5%",
                        },
                    }}
                >
                    <img src="./update.png" alt="update" />
                </Button>
                <Button
                    sx={{
                        left: "6%",
                        "@media (max-width: 600px)": {
                            left: "5%",
                        },
                    }}
                >
                    <img src="./trash.png" alt="delete" />
                </Button>
                <Input
                    type="time"
                    onChange={this.handleInputTime}
                    sx={{
                        left: "6%",
                        width: "15%",
                    }}
                />
            </Box>
        );
    }
}

export default Tasks;

