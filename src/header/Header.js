import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
class Header extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <AppBar>
          <Toolbar>
            <Button
              aria-owns={anchorEl ? "simple-menu" : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Users
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem href="#" onClick={this.handleClose}>
                Add
              </MenuItem>
              <MenuItem href="#" onClick={this.handleClose}>
                Delete
              </MenuItem>
            </Menu>

            <Button href="#">Claims</Button>

            <Button href="#">Insurance Payers</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
