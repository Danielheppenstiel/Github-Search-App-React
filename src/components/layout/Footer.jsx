function Footer() {

    const currentYear = new Date().getFullYear();

  return (
    <>
        <section className="footer">
            <div className="footer-info">
                
                <h4>DevFinder - Copyright &copy; {currentYear} All Rights Reserved</h4>
            </div>
        </section>
    </>
  )
}

export default Footer