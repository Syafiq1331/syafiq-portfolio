import NavItem from './NavItem';
import classNames from 'classnames';

export default function Nav({ scheme, dir }) {
    const dirs = {
        horizontal: " justify-center space-x-10 py-16",
        vertikal: "flex-col space-y-6"
    }

    const pickedDir = dirs[dir];

    return (
        <ul className={classNames("flex", pickedDir)}>
            <NavItem scheme={scheme} href="#profile"> Profile</NavItem>
            <NavItem scheme={scheme} href="#Skill"> Skills</NavItem>
            <NavItem scheme={scheme} href="#Projects"> Projects</NavItem>
            <NavItem scheme={scheme} href="#Contacts"> Contact</NavItem>
        </ul>
    )
}
