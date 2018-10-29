import React, {Component} from 'react'

interface Props {
  message: string
  onClick: () => void
}

export default class Header extends Component<Props> {
  public render() {
    return <button onClick={this.props.onClick}>{this.props.message}</button>
  }
}
