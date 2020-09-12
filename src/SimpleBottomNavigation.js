import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles({
	root: {
    position: "fixed",
    bottom: 0,
    right: 0,
    left: 0,   
	boxShadow: "0 3px 5px 2px rgba(0,0,0,0.12)", 
	overflowX: "hidden",
	},
	actionItem: {
		"&$selected": {
			color: "#03DAC5",
		},
	},
	selected: {},
});

export default function SimpleBottomNavigation() {
	const classes = useStyles();
	const pathname = window.location.pathname
	const [value, setValue] = React.useState(pathname);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	  };
	return (
		<BottomNavigation
			value={value}
			onChange={handleChange}
			showLabels
			className={classes.root}
		>
			<BottomNavigationAction
				classes={{
					root: classes.actionItem,
					selected: classes.selected,
				}}
				value="/"
				label="Beranda"
				icon={<HomeIcon />}
				component={Link}
				to="/"				
			/>
			<BottomNavigationAction
				classes={{
					root: classes.actionItem,
					selected: classes.selected,
				}}
				value="/survei"				
				label="Survei"
				icon={<AssignmentIcon />}
				component={Link}
				to="/survei"				
			/>
			<BottomNavigationAction
				classes={{
					root: classes.actionItem,
					selected: classes.selected,
				}}
				value="/kontak"				
				label="Kontak"
				icon={<PhoneIcon />}
				component={Link}
				to="/kontak"				
			/>
		</BottomNavigation>
	);
}
