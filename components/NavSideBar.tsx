import React from 'react';
import Header from "./Header";

import Link from './Link';

interface State {
    expanded?: boolean;
}

interface Props extends State {
    currentSculpture: Sculpture;
    sculptures: Array<Sculpture>;
}

export default class NavSideBar extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {expanded: this.props.expanded ?? false};

        this.onExpand = this.onExpand.bind(this);
    }

    onExpand() {
        this.setState({expanded: !this.state.expanded});
    }

    render() {
        const { currentSculpture, sculptures } = this.props;
        const navHeaderText = currentSculpture.price ? "Available Sculptures" : "Gallery";
        const sculptureLinks = <div className="sculpture-nav-list">
            {
                sculptures.map((s, i) => (
                    <li key={i}>
                        <Link href="/p/[id]" as={`/p/${s.title}`}>
                            <a onClick={this.onExpand}>{s.title}</a>
                        </Link>
                    </li>
                ))
            }
        </div>;

        return (
            <nav role="navigation">
                <div id="menuToggle">
                    {/* Hidden; for using :checked CSS selector. */}
                    <input type="checkbox"
                        id="menuCheckbox"
                        checked={this.state.expanded} 
                        onChange={this.onExpand} />
                    {/* The hamburger bars. */}
                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <li>
                            <Header color={"white"} fontSize="2.5em">{navHeaderText}</Header>
                        </li>
                        {sculptureLinks}
                        <hr></hr>
                        <li>
                            <Link href="/" as="/">
                                <a>Back to Home</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}