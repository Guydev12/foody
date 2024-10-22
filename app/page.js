import Link from "next/link";
import classes from "./page.module.css";
export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div classNane={classes.sliceshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel food for next level Foody</h1>
            <p>taste & share food from all the world.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}
