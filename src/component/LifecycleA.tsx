import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props: any) {
      super(props)
    
      this.state = {
         name: "Binary Mile",
      }

      console.log("LifecycleA constructor")
    }

    // make sure of using static keyword or else method will be ignored

    static getDerivedStateFromProps(props: any, state: any) {
        console.log("LifecycleA get DerivedStateFromProps")
        return null
        // either return state or null

    }

    componentDidMount(): void {
        console.log("LifecycleA componentDidMount")
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("LifecycleA componentDidUpdate")
    }
    changeState = () => {
        this.setState({ name: "Binmile" })
    }
    
    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <div>
                    Lifecyle A
                </div>
                <button onClick={this.changeState}> Change State</button>
                <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
