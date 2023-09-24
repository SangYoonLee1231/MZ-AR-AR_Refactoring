import React, { Component } from 'react';

class DraggableDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging: false,
            initialX: 0,
            initialY: 0,
            offsetX: -130,
            offsetY: -500,
        };
    }

    handleMouseDown = (e) => {
        e.preventDefault();
        const { offsetX, offsetY } = this.state;
        this.setState({
            isDragging: true,
            //현재 위치에서 이전 offset을 빼서 초기값을 업데이트하도록 한다
            initialX: e.clientX - offsetX,
            initialY: e.clientY - offsetY,
        });

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    };

    handleMouseMove = (e) => {
        if (!this.state.isDragging) return;

        const offsetX = e.clientX - this.state.initialX;
        const offsetY = e.clientY - this.state.initialY;

        this.setState({
            offsetX,
            offsetY,
        });
    };

    handleMouseUp = () => {
        this.setState({
            isDragging: false,
        });

        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    };

    render() {
        const { offsetX, offsetY } = this.state;
        const style = {
            transform: `translate(${offsetX}px, ${offsetY}px)`,
        };

        return (
            <div
                className="draggable"
                style={style}
                onMouseDown={this.handleMouseDown}
            >
                {this.props.children}
            </div>
        );
    }
}

export default DraggableDiv;