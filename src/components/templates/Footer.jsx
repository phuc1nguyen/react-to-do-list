export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="p-5 has-background-light">
      <div className="content">
        <p className="has-text-centered">created by{' '}
          <a href="https://github.com/phuc1nguyen" target="_blank">phuc1nguyen</a>{' '}&copy; {year}
        </p>
      </div>
    </footer>  
  );
}