import About from "../components/courses/About";
import Curriculums from "../components/courses/Curriculums";
import Objectives from "../components/courses/Objectives";
import Outline from "../components/courses/Ouline";
import { courseOverviewOptions } from "../utils/constants";


export function CourseOverviewOptionsReducer (state, action){
    switch(action.type.value){
        case courseOverviewOptions.about: return {value: courseOverviewOptions.about, component: <About data={action?.type?.props}/>}; 
        case courseOverviewOptions.curriculum: return{value: courseOverviewOptions.curriculum, component: <Curriculums data={action?.type?.props}/>}; 
        case courseOverviewOptions.objective: return {value: courseOverviewOptions.objective, component: <Objectives data={action?.type?.props}/>}; 
        case courseOverviewOptions.outline: return {value: courseOverviewOptions.outline, component: <Outline data={action?.type?.props}/>}; 
        default: return state;
    }
}