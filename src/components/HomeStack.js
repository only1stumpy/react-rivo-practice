import '../style/style.css';

import js from '../img/JS_icon.png'
import laravel from '../img/Laravel_icon.png'
import php from '../img/PHP_icon.png'
import jquery from '../img/jQuery_icon.png'
import java from '../img/Java_icon.png'
import bootstrap from '../img/Bootstrap_icon.png'
import wp from '../img/WP_icon.png'
import mysql from '../img/MySQL_icon.png'
import vue from '../img/Vue_js_icon.png'
import swift from '../img/Swift_icon.png' 
import react from '../img/React_native_icon.png'
import node from '../img/Node_js_icon.png'
import aws from '../img/AWS_Amplify_icon.png'
import graphql from '../img/GraphQL_icon.png'
import redux from '../img/Redux_icon.png'
import amazone from '../img/Aws_icon.png'
import google from '../img/Google_cloud_icon.png'

export default function Stack() {
    return (
    <section id='stack-section'>
        <div className='stack-section-content'>
            <h1 className='stack-section-title'>ТЕХНОЛОГИИ</h1>
            <h1 className='stack-section-title-under'>ТЕХНОЛОГИИ</h1>
            <h1 className='stack-webdev-title'>ВЕБ-РАЗРАБОТКА</h1>
            <div className='stack-webdev'>
                <a href='#'><img src={laravel} alt='Laravel'/><p>Laravel</p></a>
                <a href='#'><img src={php} alt='PHP'/>PHP</a>
                <a href='#'><img src={jquery} alt='jQuery'/>jQuery</a>
                <a href='#'><img src={js} alt='JavaScript'/>JavaScript</a>
                <a href='#'><img src={java} alt='Java'/>Java</a>
                <a href='#'><img src={bootstrap} alt='Bootstrap'/>Bootstrap</a>
                <a href='#'><img src={wp} alt='WordPress'/>WordPress</a>
                <a href='#'><img src={mysql} alt='MySQL'/>MySQL</a>
                <a href='#'><img src={vue} alt='Vue.js'/>Vue.js</a>
            </div>
            <h1 className='stack-mobdev-title'>МОБИЛЬНАЯ РАЗРАБОТКА</h1>
            <div className='stack-mobdev'>
                <a href='#'><img src={swift} alt='Swift'/>Swift</a>
                <a href='#'><img src={react} alt='React Native'/>React Native</a>
                <a href='#'><img src={node} alt='Node js'/>Node js</a>
                <a href='#'><img src={aws} alt='AWS Amplify'/>AWS Amplify</a>
                <a href='#'><img src={graphql} alt='GraphQL'/>GraphQL</a>
                <a href='#'><img src={redux} alt='Redux'/>Redux</a>
            </div>
            <h1 className='stack-devops-title'>DevOps</h1>
            <div className='stack-devops'>
                <a href='#'><img src={amazone} alt='Amazon AWS'/>Amazon AWS</a>
                <a href='#'><img src={google} alt='Google Cloud'/>Google Cloud</a>
            </div>
        </div>
    </section>
    )
}