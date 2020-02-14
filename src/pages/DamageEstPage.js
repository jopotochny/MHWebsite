import React from 'react';
import MHDropdown from '../components/MHDropdown';
import MHTextField from '../components/MHTextField';
import MHCard from '../components/MHCard';
import MHCheckbox from '../components/MHCheckbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import '../styles/DamageEstPage.css'
import {weaponIcons} from '../images';
import {faQuestion} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class DamageEstPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            category: "",
            bloatRaw: 0,
            raw: 0,
            dmg: 0,
            sharpness: "",
            affinity: 0,
            critBoost: "",
            nonEle: false,
            error: false,
            weaponClasses: {
                "Great Sword": "GS",
                "Sword & Shield": "SS",
                "Dual Blades": "DB",
                "Long Sword": "LS",
                "Hammer": "H",
                "Hunting Horn": "HH",
                "Lance": "L",
                "Gunlance": "GL",
                "Switch Axe": "SA",
                "Charge Blade": "CB",
                "Insect Glaive": "IG",
                "Bow": "B",
                "Light Bowgun": "LB",
                "Heavy Bowgun": "HB",
            },
            sharpnessValues: {
                "Red": 0.5,
                "Orange": 0.75,
                "Yellow": 1,
                "Green": 1.05,
                "Blue": 1.2,
                "White": 1.32,
                "Purple": 1.39,
            },
            bloatValues: {
                "GS": 4.8,
                "SS": 1.4,
                "DB": 1.4,
                "LS": 3.3,
                "H": 5.2,
                "HH": 4.2,
                "L": 2.3,
                "GL": 2.3,
                "SA": 3.5,
                "CB": 3.6,
                "IG": 3.1,
                "B": 1.2,
                "LB": 1.3,
                "HB": 1.5,
            },
            critBoostValues: {
                "Level 1": 1,
                "Level 2": 2,
                "Level 3": 3
            }

        };

    }
    handleCategoryChange = (e) => {
        this.setState({category: e.target.value});

    };

    handleSharpnessChange = (e) => {
        this.setState({sharpness: e.target.value});
    };

    handleBloatRawChange = (e) => {
        const re = /^[0-9\b]+$/; // regex for positive integer

        // if value is not blank, then test the regex

        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({bloatRaw: Number.parseInt(e.target.value)});
        }
    };

    handleAffinityChange = (e) => {
        const re = /^-?\d*\d+$/; // regex for integer with optional sign

        // if value is not blank, then test the regex
        console.log(e.target.value)

        if (e.target.value === '' || re.test(e.target.value)) {
            console.log(e.target.value)
            this.setState({affinity: Number.parseInt(e.target.value)});
        }
    };

    handleNonElementChange = (e) => {
        this.setState({nonEle: e.target.checked})
    };

    handleCritBoostChange = (e) => {
        this.setState({critBoost: e.target.value});
    };

    calculateDamage = () => {
        let error = false;
        (this.state.category === "" || this.state.sharpness === "" )? error = true : error = false;
        if(error){
            this.setState({error: true});
            return;
        }
        else{
            this.setState({error: false});
        }
        let raw = this.state.bloatRaw / this.state.bloatValues[this.state.category];
        let dmg = raw;
        let aff = this.state.affinity > 100 ? 100 : (this.state.affinity < -100 ? -100 : this.state.affinity);
        dmg = dmg * (this.state.nonEle ? 1.05 : 1) * this.state.sharpness * (1 + (0.25 + 0.05 * (this.state.critBoost === "" ? 0 : this.state.critBoost)) * aff/100);
        this.setState({raw: raw, dmg: dmg});
    };

    render(){
        return(
            <div className="damageEstPage">
                <MHCard className="dmgEstCard">
                    <div className="weaponInfo">
                        <div className="inputDiv">
                            <MHDropdown className="categoryDropdown" label="Weapon Category" items={this.state.weaponClasses} val={this.state.category} handleChange={this.handleCategoryChange}/>
                            <img className="mhIcon" src={weaponIcons[this.state.category]}></img>
                        </div>
                        <div className="inputDiv">
                            <MHTextField className="bloatRawTextField" handleChange={this.handleBloatRawChange} label="Bloated Attack"/>
                            <Link href="/faq">
                                <FontAwesomeIcon icon={faQuestion} style={{marginLeft: "5px", marginTop: "25px"}}/>
                            </Link>
                        </div>
                        <div className="inputDiv">
                            <MHDropdown className="sharpnessDropdown" label="Sharpness" items={this.state.sharpnessValues} val={this.state.sharpness} handleChange={this.handleSharpnessChange}/>
                        </div>
                        <div className="inputDiv">
                            <MHTextField handleChange={this.handleAffinityChange} label="Affinity (0 if blank)"/>
                        </div>
                        <div className="inputDiv">
                            <MHDropdown className="critBoostDropdown" label="Critical Boost" items={this.state.critBoostValues} val={this.state.critBoost} handleChange={this.handleCritBoostChange}/>
                        </div>
                        <div className="inputDiv">
                            <MHCheckbox label="Non Elemental Boost" handleChange={this.handleNonElementChange}/>
                        </div>
                    </div>
                    <div className="submitButton">
                        <Button variant="contained" onClick={this.calculateDamage}>Calculate</Button>
                    </div>
                    <div>
                        <p style={{color: "red"}} hidden={!this.state.error}>Please select valid values for each of the above boxes.</p>
                    </div>
                </MHCard>
                <MHCard className="dmgEstCard">
                    <div className="rawAndDmg">
                        <div className="cardWrapper">
                            <MHCard>
                                <p style={{fontsize: '18px'}}>
                                    True Raw: {Number.isNaN(this.state.raw) ? 0 : this.state.raw}
                                </p>
                            </MHCard>
                        </div>
                        <div className="cardWrapper">
                            <MHCard>
                                <p style={{fontsize: '18px'}}>
                                    Average Damage: {Number.isNaN(this.state.dmg) ? 0 : this.state.dmg}
                                </p>
                            </MHCard>
                        </div>
                    </div>
                </MHCard>
                <MHCard className="hitzoneCard">

                </MHCard>
            </div>
        )
    }



}
export default DamageEstPage;