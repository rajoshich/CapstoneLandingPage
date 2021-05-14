export const Testimonials = (props) => {
  return (
    <div id='testimonials' style={{justifyContent:'center'}}>
      <div className='container' style={{justifyContent:'center'}}>
        <div className='section-title text-center'>
          <h2>How Does A Hearing Aid Work?</h2>
        </div>
        <div className='row' style={{justifyContent:'center'}}>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} style={{justifyContent:'center'}}>
                  <div className='testimonial' style={{justifyContent:'center'}}>
                    <div className='testimonial-content' style={{justifyContent:'center'}}>
                      <p style={{justifyContent:'center'}}>"{d.text}"</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
