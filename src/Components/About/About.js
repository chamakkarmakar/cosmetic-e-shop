import React from 'react'
import { Button } from 'react-bootstrap'

const About = () => {
  return (
    <div className='d-flex justify-content-even p-5'>
      <div className='pe-5'>
        <h2 className='fs-2 fw-bolder text-center'>About Our Beauty Store</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum nostrum sed ea itaque quas nemo aspernatur sequi in? Explicabo recusandae eligendi cumque in praesentium quis unde, facilis iure reprehenderit odit asperiores voluptate laudantium corporis nesciunt dicta provident libero, quo nulla, natus possimus! Optio culpa facilis vitae. Facilis dolorem odio ratione ipsa, repellat dolore dolorum? Odit sit nemo rem pariatur laborum architecto neque id consequuntur quo vel incidunt ratione recusandae a eius, omnis doloremque enim ad, eum in error obcaecati nesciunt. Dignissimos corrupti accusamus sapiente quisquam aliquam iusto repudiandae quam nobis dicta. Autem dolorem rem asperiores sapiente quod eveniet repudiandae dolor harum fugit! Consequuntur delectus fuga nisi voluptates ratione quia asperiores, eaque aut similique et animi earum dignissimos ea est veritatis deleniti sapiente reprehenderit, sed ducimus. Possimus quis laborum perferendis velit maxime beatae voluptate aut eius. Beatae, placeat nostrum.</p>
        <Button variant="primary">Read more</Button>
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="about-img" style={{width : "40rem"}}/>
      </div>
    </div>
  )
}

export default About
