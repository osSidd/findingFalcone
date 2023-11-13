// import React from 'react'

// class ErrorBoundary extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             error: null,
//             errorInfo: null
//         }
//     }

//     componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
//         this.setState({
//             error: error,
//             errorInfo: errorInfo
//         })
//     }

//     render(){
//         return this.state.error ? <Fallback errorObj = {{...this.state}}/> : this.props.children
//     }
// }

// function Fallback({errorObj}){
//     return (
//         <div>
//             <h2>Something went wrong</h2>
//             <details>
//                 {errorObj.error.toString()}
//                 <br /><br />
//                 {errorObj.errorInfo.componentStack}
//             </details>
//         </div>
//     )
// }