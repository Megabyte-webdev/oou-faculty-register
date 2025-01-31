import About from "../components/courses/About";
import Discussion from "../components/courses/Discussion";
import Reviews from "../components/courses/Reviews";
import { courseDisplayOptions } from "../utils/constants";

export const initialState = {value: courseDisplayOptions.about, component: <About data={null}/>, init: true}

export function CourseDisplayOptionsReducer (state, action){
    switch(action.type.value){
        case courseDisplayOptions.about: return {value: courseDisplayOptions.about, component: <About data={action?.type?.props?.about}/>}; 
        case courseDisplayOptions.review: return{value: courseDisplayOptions.review, component: <Reviews data={action?.type?.props?.reviews}/>}; 
        case courseDisplayOptions.discussion: return {value: courseDisplayOptions.discussion, component: <Discussion data={action?.type?.props?.discussion}/>}; 
        default: return state;
    }
}