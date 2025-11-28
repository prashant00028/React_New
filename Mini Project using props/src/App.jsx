import React from 'react'
import Project from './components/Project'

const App = () => {
  const jobOpenings = [
    {
      brandlogo: "https://logo.clearbit.com/meta.com",
      name: "Meta",
      dateposted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$55/hr",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://logo.clearbit.com/amazon.com",
      name: "Amazon",
      dateposted: "10 days ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$70/hr",
      location: "Bangalore, India"
    },
    {
      brandlogo: "https://logo.clearbit.com/apple.com",
      name: "Apple",
      dateposted: "2 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$50/hr",
      location: "Hyderabad, India"
    },
    {
      brandlogo: "https://logo.clearbit.com/netflix.com",
      name: "Netflix",
      dateposted: "7 days ago",
      post: "Cloud Support Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$65/hr",
      location: "Delhi, India"
    },
    {
      brandlogo: "https://logo.clearbit.com/google.com",
      name: "Google",
      dateposted: "3 days ago",
      post: "Java Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$60/hr",
      location: "Mumbai, India"
    },
    {
      brandlogo: "https://logo.clearbit.com/microsoft.com",
      name: "Microsoft",
      dateposted: "1 day ago",
      post: "React Developer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Bangalore, India"
    },
    {
      brandlogo: "https://logo.clearbit.com/tesla.com",
      name: "Tesla",
      dateposted: "9 days ago",
      post: "Data Analyst",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Pune, India"
    },
    {
      brandlogo: "https://logo.clearbit.com/nvidia.com",
      name: "Nvidia",
      dateposted: "4 days ago",
      post: "Machine Learning Intern",
      tag1: "Part Time",
      tag2: "Internship",
      pay: "$30/hr",
      location: "Hyderabad, India"
    },
  ];
  
  return (
    <div className='parent'>
      {jobOpenings.map(function(elem){
      return <Project company={elem.name} post={elem.post} payhours={elem.pay} location={elem.location} logo={elem.brandlogo}/>
})}
    </div>

  )
}
export default App
