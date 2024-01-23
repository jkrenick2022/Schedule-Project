import React from 'react'
import Event from './Event.jsx'
import '../index.css'

const Calendar = () => {
    return(
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event="Breakfast in Magic Kingdom" color="yellow" description="Enjoy a Mickey-Shaped Waffle at Sleepy Hollow Refreshments!" span="1"/>
                        <Event event="Breakfast in Hollywood Studios" color="yellow" description="Enjoy a Mickey Waffle Platter at Hollywood Scoops!" span="1"/>
                        <td></td>
                        <Event event="Breakfast in Animal Kingdom" color="yellow" description="Enjoy a Pongu Lumpia at Pongu Pongu in Pandora - World of Avatar." span="1"/>
                        <Event event="Breakfast in Epcot" color="yellow" description="Enjoy a Liege Waffle at Connections Café as you travel to France!" span="1"/>
                        <Event event="Breakfast in Magic Kingdom" color="yellow" description="Enjoy a Mickey Cinnamon Roll at Main Street Bakery!" span="1"/>
                        <Event event="Breakfast in Hollywood Studios" color="yellow" description="Enjoy a Ronto Morning Wrap over at Ronto Roasters in Galaxy's Edge!" span="1"/>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <Event event="Explore Fantasyland & Adventureland" color="blue" description="Immerse yourself in the enchanting worlds of Fantasyland and Adventureland, discovering iconic attractions and meeting beloved characters." span="4"/>
                        <Event event="Explore Toy Story Land" color="red" description="Immerse yourself in the whimsical world of Toy Story Land, where the magic of the movies comes to life." span="2"/>
                        <Event event="Breakfast at your Resort" color="yellow" description="Begin your day with a delightful breakfast at your resort, savoring a delicious meal in the comfort of your surroundings." span="1"/>
                        <Event event="Explore the World of Pandora" color="blue" description="Embark on an otherworldly journey as you explore the mesmerizing World of Pandora." span="2"/>
                        <Event event="Explore Future World Attractions" color="blue" description="Dive into the wonders of Future World, where innovation and imagination collide." span="3"/>
                        <Event event="Enjoy attractions you missed on Day 1" color="pink" description="Take this opportunity to revisit or discover attractions that you might have missed on the first day. " span="4"/>
                        <Event event="Enjoy attractions you missed on Day 1" color="pink" description="Take this opportunity to revisit or discover attractions that you might have missed on the first day. " span="4"/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event="Relax by the Pool" color="purple" description="Take a break from the theme park excitement and indulge in a relaxing poolside experience." span ="3"/>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <Event event="Travel to a Galaxy far far away in Galaxy's Edge" color="blue" description="Embark on an intergalactic adventure as you journey to a Galaxy far, far away in Galaxy's Edge." span="3"/>
                        <Event event="Ride Expedition Everest" color="red" description="Brace yourself for an exhilarating expedition as you conquer the mythical Everest mountain." span="1"/>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event="Lunch in Animal Kingdom" color="yellow" description="Enjoy a delightful lunch amidst the natural beauty of Animal Kingdom." span="1"/>
                        <Event event="Lunch in Epcot" color="yellow" description="Indulge in a delicious lunch experience at Epcot, where culinary adventures await. " span="1"/>
                        
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <Event event="Lunch in Magic Kingdom" color="yellow" description="Enjoy a Mickey-Shaped Pretzel at The Lunching Pad!" span="1"/>
                        <Event event="Lunch at Disney Springs" color="yellow" description="Experience a culinary adventure at Disney Springs, where a diverse array of dining options awaits." span="1"/>
                        <Event event="Visit the regions of Africa & Asia" color="orange" description="Discover the unique landscapes, wildlife, and attractions that showcase the beauty and wonders of these continents, creating a memorable journey of discovery." span="4"/>
                        <Event event="Visit the World Showcase" color="orange" description="Explore the diverse pavilions representing different countries, indulge in authentic cuisine, and engage with the cultural experiences that make each showcase a unique and enriching destination." span="4"/>
                        <Event event="Lunch in Magic Kingdom" color="yellow" description="Take another opportunity to enjoy a delightful lunch in the magical ambiance of Magic Kingdom." span="1"/>
                        <Event event="Lunch in Hollywood Stuidos" color="yellow" description="Enjoy a satisfying lunch in the captivating setting of Hollywood Studios." span="1"/>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <Event event="Explore Tomorrowland" color="red" description="Embark on a futuristic adventure as you explore the wonders of Tomorrowland." span="3"/>
                        <Event event="Lunch in Hollywood Studios" color="yellow" description="Enjoy a delightful lunch in the vibrant atmosphere of Hollywood Studios." span="1"/>
                        <Event event="Explore Disney's Typhoon Lagoon Water Park" color="blue" description="Experience thrilling water attractions, relax on sandy beaches, and enjoy the tropical ambiance of this exciting water park." span="3"/>
                        <Event event="Revisit your favorite Attractions" color="pink" description="Take the opportunity to revisit your favorite attractions from earlier in the week. " span="3"/>
                        <Event event="Revisit your favorite Attractions" color="pink" description="Take the opportunity to revisit your favorite attractions from earlier in the week. " span="4"/>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event="Enjoy shows and attractions in the main park" color="green" description="From captivating shows to iconic attractions, spend the afternoon enjoying the diverse and magical experiences that the park has to offer." span="3"/>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event="Dinner in Magic Kingdom" color="yellow" description="Indulge in a delightful dinner at Magic Kingdom, savoring the enchanting atmosphere of the park. " span="1"/>
                        <td></td>
                        <Event event="Dinner at Animal Kingdom" color="yellow" description="Enjoy a satisfying dinner amidst the natural beauty of Animal Kingdom." span="1"/>
                        <Event event="Dinner in Epcot" color="yellow" descirption="" span="1"/>
                        <Event event="Dinner in Magic Kingdom" color="yellow" description="From international cuisines to innovative dishes, Epcot offers a diverse array of dining experiences to suit every taste." span="1"/>
                    </tr>
                    <tr>
                        <td className="time">6 pm</td>
                        <Event event="Parade & Firework Show" color="green" description="Witness the enchanting floats, vibrant performances, and dazzling fireworks that light up the night sky, creating a magical and unforgettable experience." span="2" />
                        <Event event="Dinner in Hollywood Studios" color="yellow" description="Enjoy a satisfying dinner in the captivating setting of Hollywood Studios." span="1"/>
                        <Event event="Dinner at Disney Springs" color="yellow" description="Savor a delicious dinner at Disney Springs, where a variety of dining options cater to every palate." span="1"/>
                        <Event event="Enjoy evening Entertainment" color="green" description="Whether it's live performances, music, or themed shows, immerse yourself in the entertainment offerings that add a magical touch to your evening." span="2"/>
                        <Event event="Enjoy evening Entertainment" color="green" description="Whether it's live performances, music, or themed shows, immerse yourself in the entertainment offerings that add a magical touch to your evening." span="2"/>
                        <Event event="Parade & Firework Show" color="green" description="Witness the enchanting floats, vibrant performances, and dazzling fireworks that light up the night sky, creating a magical and unforgettable experience." span="2" />
                        <Event event="Dinner in Hollywood Studios" color="yellow" descirption="Enjoy a satisfying dinner in the captivating setting of Hollywood Studios." span="1"/>
                    </tr>
                    <tr>
                        <td className="time">7 pm</td>
                        <Event event="Enjoy evening Entertainment" color="green" description="Continue to enjoy the evening with captivating entertainment. Choose from a variety of shows, performances, or nighttime spectaculars that bring the park to life after dark." span="1"/>
                        <td></td>
                        <Event event="Enjoy evening Entertainment" color="green" description="Continue to enjoy the evening with captivating entertainment. Choose from a variety of shows, performances, or nighttime spectaculars that bring the park to life after dark." span="1"/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Calendar;