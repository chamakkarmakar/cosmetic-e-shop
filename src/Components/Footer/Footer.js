import React from 'react'
import { ClockIcon } from '@heroicons/react/24/solid'
const Footer = () => {
  return (
    <footer className='bg-dark text-light py-5'>
    <div class="container">
        <div class="footer-top">
            <div class="row">
                <div class="col-md-6 col-lg-3">
                    <h3>Lorem Ipsum dummy text </h3>
                    <ul style={{listStyleType : "none"}}>
                        <li><a className='text-decoration-none' href="tel:(010) 1234 4321"><i class="fas fa-phone fa-flip-horizontal"></i>(010) 1234 4321</a></li>
                        <li><i class="fas fa-map-marker-alt"></i>
                            1 / 105 Bay Lights,
                            <br/>Lorem Ipsum,
                            <br/>LIC 3201
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="border-bottom border-danger">
                        <h4>Page links</h4>
                    </div>
                    <ul style={{listStyleType : "none"}}>
                        <li>Home</li>
                        <li>About</li>
                        <li>Testimonial</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="border-bottom border-danger">
                        <h4>More Info</h4>
                    </div>
                    <ul style={{listStyleType : "none"}}>
                        <li>Lorem ipsum</li>
                        <li>Dolor sit amet</li>
                        <li>Consectetur Adipisicing </li>
                        <li>Ed do eiusmod tempor incididunt</li>
                    </ul>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="border-bottom border-danger">
                        <h4>Open hours</h4>
                        <ul style={{listStyleType : "none"}} >
                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>
                    </div>
                    <table class="text-light">
                        <tbody>
                            <tr>
                                <td><ClockIcon style={{width : "20px"}} /> Monday Thursday</td>
                                <td>9:00am - 5:00pm</td>
                            </tr>
                            <tr>
                                <td><ClockIcon style={{width : "20px"}} /> Friday</td>
                                <td>9:00am - 4:00pm</td>
                            </tr>
                            <tr>
                                <td><ClockIcon style={{width : "20px"}} /> Sturday</td>
                                <td>9:00am - 1:30pm</td>
                            </tr>
                            <tr>
                                <td><ClockIcon style={{width : "20px"}} /> Sunday</td>
                                <td>9:30am - 12:00pm</td>
                            </tr>
                        </tbody>
                    </table>
                    <hr />
                </div>
            </div>
        </div>
        <hr />
        <div class="footer-bottom">
            <div class="row">
                <div class="col-sm-4">
                    Privacy policy
                </div>
                <div class="col-sm-8">
                    <p>Chamak Karmakar @ 2023 All rights reserved</p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer
