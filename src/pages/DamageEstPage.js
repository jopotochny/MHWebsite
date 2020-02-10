import React from 'react';
import MHDropdown from '../components/MHDropdown';
import MHTextField from '../components/MHTextField';
import MHCard from '../components/MHCard';
import Button from '@material-ui/core/Button';
import '../styles/DamageEstPage.css'
import {weaponIcons} from '../images';
function DamageEstPage(props){
    const [category, setCategory] = React.useState("");
    const [bloatRaw, setBloatRaw] = React.useState(0);
    const [rawAndDmg, setRawAndDmg] = React.useState({raw: 0, dmg: 0});
    const [sharpness, setSharpness] = React.useState("");
    const [affinity, setAffinity] = React.useState(0);
    const [error, setError] = React.useState(false);
    const handleCategoryChange = (e) => {
        setCategory(e.target.value);

    };

    const handleSharpnessChange = (e) => {
        setSharpness(e.target.value);
    };
    const handleBloatRawChange = (e) => {
        const re = /^[0-9\b]+$/;

        // if value is not blank, then test the regex

        if (e.target.value === '' || re.test(e.target.value)) {
            setBloatRaw(Number.parseInt(e.target.value));
        }
    };

    const handleAffinityChange = (e) => {
        const re = /^[0-9\b]+$/;

        // if value is not blank, then test the regex

        if (e.target.value === '' || re.test(e.target.value)) {
            setAffinity(Number.parseInt(e.target.value));
        }
    };
    const calculateDamage = () => {
        (category === "" || sharpness === "" )? setError(true) : setError(false);
        if(error){
            return;
        }
        let raw = bloatRaw / bloatValues[category];
        let dmg = raw;
        let aff = affinity > 100 ? 100 : (affinity < -100 ? -100 : affinity);
        dmg = dmg * sharpness * (1 + 0.25 * aff/100);
        setRawAndDmg({raw: raw, dmg: dmg});
    };

    const weaponClasses = {
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
    };
    const sharpnessValues = {
        "Red": 0.5,
        "Orange": 0.75,
        "Yellow": 1,
        "Green": 1.05,
        "Blue": 1.2,
        "White": 1.32,
        "Purple": 1.39,
    };
    const bloatValues = {
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
    };

    return(
        <div className="damageEstPage">
            <div className="weaponInfo">
                <div className="inputDiv">
                    <MHDropdown className="categoryDropdown" label="Weapon Category" items={weaponClasses} val={category} handleChange={handleCategoryChange}/>
                    <img className="mhIcon" src={weaponIcons[category]}></img>
                </div>
                <div className="inputDiv">
                    <MHTextField handleChange={handleBloatRawChange} label="Bloated Attack"/>
                </div>
                <div className="inputDiv">
                    <MHDropdown className="sharpnessDropdown" label="Sharpness" items={sharpnessValues} val={sharpness} handleChange={handleSharpnessChange}/>
                </div>
                <div className="inputDiv">
                    <MHTextField handleChange={handleAffinityChange} label="Affinity"/>
                </div>
            </div>
            <div className="submitButton">
                <Button variant="contained" onMouseDown={calculateDamage}>Calculate</Button>
            </div>
            <div>
                <p style={{color: "red"}} hidden={!error}>Please select valid values for each of the above boxes.</p>
            </div>
            <div className="rawAndDmg">
                <div className="cardWrapper">
                    <MHCard>
                        <p style={{fontsize: '18px'}}>
                            True Raw: {Number.isNaN(rawAndDmg.raw) ? 0 : rawAndDmg.raw}
                        </p>
                    </MHCard>
                </div>
                <div className="cardWrapper">
                    <MHCard>
                        <p style={{fontsize: '18px'}}>
                            Average Damage: {Number.isNaN(rawAndDmg.dmg) ? 0 : rawAndDmg.dmg}
                        </p>
                    </MHCard>
                </div>
            </div>
        </div>
)

}
export default DamageEstPage;