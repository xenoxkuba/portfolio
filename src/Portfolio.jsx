import Project from "./Project";
import Navigation from "./Nav";

const Portfolio = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-500 min-h-screen">
      <Navigation />
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Project
            title="30 days of pandas with Leetcode"
            projectLink="https://github.com/xenoxkuba/leetcode-problems/blob/main/30%20days%20pandas%20Leetcode%20and%20some%20sql.pdf"
            imgLink="/pandas-leetcode.png"
            alt="ecommerce Screenshot"
            usedSkills="Solved data problems in Leetcode challange with the help of pandas"
          />
          <Project
            title="Data Analysis with Python Certification freeCodeCamp"
            projectLink="https://github.com/stars/xenoxkuba/lists/medical-demographic-pageviews"
            imgLink="/medical.png"
            alt="ecommerce Screenshot"
            usedSkills="Analyzed medical, demographic, pageviews and sea level data using pandas matplotlib and seaborn"
          />
          <Project
            title="(Uni Project) Ecommerce AI Assistant"
            projectLink="https://ecommerce-query-ctx.vercel.app/  "
            imgLink="/ecommerceImg.png"
            alt="ecommerce Screenshot"
            usedSkills="React query, axios, context, tailwindcss, fakestoreAPI"
          />
          <Project
            title="(Uni Project) Weather App Chart"
            projectLink="https://jakub-purczynski-weather.vercel.app/ "
            imgLink="/weatherAppImg.png"
            alt="Weather App Screenshot"
            usedSkills="TailwindCss, axios, OpenWeatherMap API, Victory Charts "
          />
          <Project
            title="(Uni Project) Expense List with Charts"
            projectLink="https://github.com/xenoxkuba/-Uni-Project-PZ_expense_list"
            imgLink="/expenseListImg.png"
            alt="Expense List Screenshot"
            usedSkills="Firebase, React Hooks, Vercel"
          />
          <Project
            title="(Uni Project) Sorting Algorithms"
            projectLink="https://docs.google.com/document/d/1rBGc2P_4LOvkpacPqnInWW2M2nLmWN25/edit?usp=sharing&ouid=101091025811563747912&rtpof=true&sd=true"
            imgLink="/sortingAlgorithms.png"
            alt="Sorting Algorithms Screenshot"
            usedSkills="C#, MS Office"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
