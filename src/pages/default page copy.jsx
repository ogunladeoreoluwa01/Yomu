import NavBar from "./components/nav";
import { Link,NavLink} from "react-router-dom";



const Home = () => {
  return ( <>
  <main className="bg-homepage  md:justify-center md:items-center flex flex-col md:max-w-[1200px] md:mx-auto ">
  
  <section className="md:my-5 my-2 mx-auto flex items-center w-[95vw]  justify-between pr-16 md:pl-24 pl-[4.5rem] ">
  <form class="form relative ">
  <button class="absolute left-2 -translate-y-1/2 top-1/2 pt-2">
    <svg
      width="17"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="search"
      class="w-5 h-5 text-white2"
    >
      <path
        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
        stroke="currentColor"
        stroke-width="1.333"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  </button>
  <input
    class="glass text-white2 input h-10 rounded-md px-8 py-3 border border-transparent  focus:outline-none focus:border-main-glass text-whit placeholder-white2 placeholder:text-sm transition-all duration-300 shadow-md"
    placeholder="Search..."
    required=""
    type="text"
  />
  <button type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1 text-white">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 text-white2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </svg>
  </button>
</form>
    
    <NavLink to="/" className=" text-3xl font-sub font-bold duration-300 ease-linear transition-all"><span className=" hidden md:inline tracking-tight text-logo">Yomu</span><span className="text-white">読<span className="text-logo md:text-white">む</span></span></NavLink>
    


  </section>
  <section className="flex md:gap-10 gap-5 w-[98vw] items-start">
  <NavBar/>
  <section className="w-[85%]  border">

  </section>
  </section>
  
  </main>
  
  
  </> );
}
 
export default Home;<>


</>