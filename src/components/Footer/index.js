

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shuvradeb Saha. All rights reserved.</p>
        </div>
      
    </footer>
  );
}
