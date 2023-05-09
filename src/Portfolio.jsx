import Project from "./Project";
import Navigation from "./Nav";
import SkillsNav from "./SkillsNav";

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-r from-red-800 to-fuchsia-900 min-h-screen">
      <Navigation />
      <SkillsNav />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          My Portfolio
        </h1>
        <p className="text-lg font-medium text-center text-white mb-16">
          Find my latest projects...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Project
            title="Ecommerce "
            projectLink="https://ecommerce-query-ctx.vercel.app/  "
            imgLink="/ecommerceImg.png"
            alt="ecommerce Screenshot"
            usedSkills="react query, axios, context, tailwindcss, fakestoreAPI"
          />
          <Project
            title="Weather App Chart"
            projectLink="https://jakub-purczynski-weather.vercel.app/ "
            imgLink="/weatherAppImg.png"
            alt="Weather App Screenshot"
            usedSkills="tailwindCss, axios, OpenWeatherMap API, Victory Charts "
          />
          <Project
            title="Expense List with Charts"
            projectLink="https://xenoxkuba.github.io/PZ_expense_list/ "
            imgLink="/expenseListImg.png"
            alt="Expense List Screenshot"
            usedSkills="Firebase, React Hooks, Vercel"
          />
          <Project
            title="Auth Panel Using Redux"
            projectLink="https://redux-auth-ten.vercel.app/ "
            imgLink="/reduxAuthImg.png"
            alt="Redux Auth Screenshot"
            usedSkills="React Redux"
          />
          <Project
            title="Typescript ToDo "
            projectLink="https://typescript-todo-pearl.vercel.app/"
            imgLink="/typescriptToDoImg.png"
            alt="Typescript ToDo Screenshot"
            usedSkills="Basic TypeScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
