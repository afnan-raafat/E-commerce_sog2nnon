export default function About() {
    return (
        <>
               {/* صوره بال bootStap   */}
            <div className="text-center">
  <img src={require('./Images/ss6.avif')} className="rounded" alt="..."/>
</div>
            <h1 style={{ color:"#bc6c25" ,marginLeft:"1%"}}> About Us </h1>
            <p>
                At <strong style={{color:"#283618"}}>Afnoon's Boutique</strong>,
                we believe in making shopping easy, convenient, and accessible for everyone.<br></br>
                Established in 2024, our platform was built with a passion for
                bringing the best products from around the world to your fingertips.<br></br>
                Whether you are looking for the latest tech gadgets, fashion trends,
                or everyday essentials, our store offers a wide variety of high-quality products from trusted brands.

            </p>
            <style>{` p {margin-left:2% } `}</style>
            <style>{`p {font-size:20px} `}</style>
            <style>
          </style>
            <style>{ `body { background-color:#fefae0; } `}</style>
            
        
        </>
    );
}