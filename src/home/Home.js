import "./Home.css"
import GitHubCalendar from "react-github-calendar"

export default function Home() {
    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 4;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

    return <>
        <img src="me.jpg"></img>
        <GitHubCalendar 
        username="yeolyi" 
        transformData={selectLastHalfYear} 
        hideColorLegend
        hideMonthLabels
        blockSize={16}
        blockRadius={8}
        />
        <div id="links">
        <a href="https://www.instagram.com/studyeolyi/">Instagram</a>
        <a href="https://github.com/Yeolyi">Github</a>
        </div>
    </>
}