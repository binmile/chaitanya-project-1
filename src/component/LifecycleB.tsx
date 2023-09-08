import React, { Component } from 'react'
import LifecycleA from './LifecycleA'

class LifecycleB extends Component {
    constructor(props: any) {
      super(props)
    
      this.state = {
         name: "Binary Mile",
      }

      console.log("LifecycleB constructor")
    }

    // make sure of using static keyword or else method will be ignored

    static getDerivedStateFromProps(props: any, state: any) {
        console.log("LifecycleB get DerivedStateFromProps")
        return null
        // either return state or null

    }

    componentDidMount(): void {
        console.log("LifecycleB componentDidMount")
    }
    
    render() {
        console.log("LifecycleB render")
        return (
        <div>
            LifecycleB
        </div>
        )
    }
}

export default LifecycleB
