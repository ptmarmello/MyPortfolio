import React from 'react';
import './styles.css';
import Container from '../../components/Container';
import NavBar from '../../components/Nav';

export default function About(){
    return(
        <div className="App">
            <NavBar/>
            <Container head="About">
                <div className="About">
                <p className="about-me">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin urna lectus, vestibulum sit amet dui non, interdum hendrerit ante. Mauris consectetur sit amet arcu vel lobortis. Suspendisse convallis arcu non erat eleifend vulputate. Sed id sapien augue. Donec cursus libero luctus erat molestie mattis. Morbi eget est consequat, aliquet tortor eget, facilisis nibh. Praesent faucibus metus eget nisi porttitor, in varius enim ullamcorper. Vestibulum laoreet interdum erat, non laoreet purus sollicitudin sit amet. Aenean urna leo, cursus id turpis vitae, laoreet venenatis libero. In ut sapien ultrices, elementum nisi ut, condimentum elit. Nulla auctor convallis nisl, ut vehicula leo interdum non. Proin a commodo nisi, id faucibus arcu. In hac habitasse platea dictumst. Sed vel tellus eget elit tincidunt efficitur vel varius dolor.</p>
                <p className="about-me-more">
                Quisque nec libero vulputate, rhoncus urna nec, rhoncus nisi. Ut porttitor gravida enim, ut facilisis sapien lobortis in. Suspendisse nec odio quis dui hendrerit porttitor. Sed vestibulum mi at urna iaculis, faucibus dapibus ex efficitur. Nullam ultrices leo vitae augue faucibus sodales quis a purus. Etiam euismod tortor ut sagittis pretium. Fusce semper consequat leo, facilisis bibendum mauris imperdiet eget. Quisque mollis, magna bibendum accumsan venenatis, quam est auctor ipsum, sit amet finibus nibh augue a nisi. Sed accumsan justo lacus, a aliquam tortor faucibus non. Phasellus a luctus dui, vel efficitur nunc. Integer id urna sit amet sapien semper pulvinar sed maximus velit. Sed vel libero quis sem finibus mollis vitae vel nisi. Etiam laoreet sapien semper, sagittis tortor vitae, tincidunt mauris. Morbi cursus orci vitae dignissim porta.
                </p>

                </div>
        </Container>

        </div>
    );
}