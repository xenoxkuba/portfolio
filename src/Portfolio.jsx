import Project from "./Project";
import Navigation from "./Nav";

const Portfolio = () => {
  return (
    <div className="bg-dataS  min-h-screen">
      <Navigation />
      <div className="container mx-auto py-12 px-8 sm:px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Project
            title="30 days of pandas with Leetcode"
            projectLink="https://github.com/xenoxkuba/leetcode-problems/blob/main/30%20days%20pandas%20Leetcode%20and%20some%20sql.pdf"
            imgLink="/pandas-leetcode.png"
            alt="pandas Screenshot"
            usedSkills="Solved data problems in Leetcode challange with the help of pandas"
            linkType="GitHub Link"
          />
          <Project
            title="Data Analysis with Python Certification freeCodeCamp"
            projectLink="https://github.com/stars/xenoxkuba/lists/medical-demographic-pageviews"
            imgLink="/medical.png"
            alt="data Screenshot"
            usedSkills="Analyzed medical, demographic, pageviews and sea level data using pandas matplotlib and seaborn"
            linkType="GitHub Link"
          />
          <Project
            title="Sales analysis with pandas, numpy & matplotlib"
            projectLink="https://github.com/xenoxkuba/Sales-analysis-with-pandas-numpy-matplotlib/blob/main/sales-analysis.ipynb"
            imgLink="/sales.png"
            alt="sales analysis Screenshot"
            usedSkills="Cleaning, organizing and plotting sales data"
            linkType="GitHub Link"
          />
          <Project
            title="SQL Problems"
            projectLink="https://github.com/xenoxkuba/sql-recru-tests-and-exercises"
            imgLink="/sqlrecru.png"
            alt="sql Screenshot"
            usedSkills="Some sql problems that I had to solve during learning process also some basic exercises"
            linkType="GitHub Link"
          />
          <Project
            title="R basics in data science"
            projectLink="https://github.com/xenoxkuba/R-basics"
            imgLink="/rLang.png"
            alt="R Screenshot"
            usedSkills="Some R code written during the Harvard Data Science course"
            linkType="GitHub Link"
          />
          <Project
            title="(Uni Project) Ecommerce AI Assistant"
            projectLink="https://ecommerce-query-ctx.vercel.app/  "
            imgLink="/ecommerceImg.png"
            alt="ecommerce Screenshot"
            usedSkills="Ecommerce with AI Assistant Panel for my thesis"
            linkType="Web page Link"
          />
          <Project
            title="(Uni Project) Weather App Chart"
            projectLink="https://jakub-purczynski-weather.vercel.app/ "
            imgLink="/weatherAppImg.png"
            alt="Weather App Screenshot"
            usedSkills="TailwindCss, axios, OpenWeatherMap API, Victory Charts "
            linkType="Web page Link"
          />
          <Project
            title="(Uni Project) Expense List with Charts"
            projectLink="https://github.com/xenoxkuba/-Uni-Project-PZ_expense_list"
            imgLink="/expenseListImg.png"
            alt="Expense List Screenshot"
            usedSkills="Firebase, Vercel"
            linkType="GitHub Link"
          />
          <Project
            title="(Uni Project) Sorting Algorithms"
            projectLink="https://docs.google.com/document/d/1rBGc2P_4LOvkpacPqnInWW2M2nLmWN25/edit?usp=sharing&ouid=101091025811563747912&rtpof=true&sd=true"
            imgLink="/sortingAlgorithms.png"
            alt="Sorting Algorithms Screenshot"
            usedSkills="C#, MS Office"
            linkType="Doc Link"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
