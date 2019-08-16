import { Switch, Route } from 'react-router-dom'
import React from 'react';

// import Landing from './Landing';

function About() {
    return (
        <div>
            All About ME!
        </div>
    )
}

function Portfolio() {
    return (
        <div>
            Showcase!
        </div>
    )
}

function Contact() {
    return (
        <div>
            Contact Me? (Hire Me?) ??
        </div>
    )
}

// function Views() {
//     return (
//         <main>
//             <Switch>
//                 <Route exact path="/" component={Landing}/>
//                 <Route exact path="/about" component={About}/>
//                 <Route exact path="/portfolio" component={Portfolio}/>
//                 <Route exact path="/contact" component={Contact}/>
//             </Switch>
//         </main>
//     )
// }
export default Views;