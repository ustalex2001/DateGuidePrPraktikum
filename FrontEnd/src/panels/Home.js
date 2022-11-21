import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import Slider from "./slider/Slider";
import './homestyles.css';

const Home = ({ id, go, fetchedUser }) => (

	<Panel id={id}>
    <PanelHeader>Главная</PanelHeader>
	<div class="maindiv">

    </div>
	</Panel>

);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
