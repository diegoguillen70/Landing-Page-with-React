import React from "react";
import NavBar from "./NavBar";
import Jumbotron from './Jumbotron';
import Card from './Card';
import Footer from './Footer';
//include images into your bundle
import image1 from "../../img/cards images/1.jpg";
import image2 from "../../img/cards images/2.jpg";
import image3 from "../../img/cards images/3.jpg";
import image4 from "../../img/cards images/4.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<Jumbotron title="Hello World" 
					description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
					btnText="Learn more .."/>
			<div className="container">
				<div className="row mb-4">
					<Card src={image1}/>
					<Card src={image2}/>
					<Card src={image3}/>
					<Card src={image4}/>
				</div>				
			</div>
			<div className="bg-dark">
			<Footer />
			</div>
		</>
	);
};

export default Home;
