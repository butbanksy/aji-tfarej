import React, {useState} from "react"
import {StyleSheet} from "react-native"
import {Switch} from "react-native-paper"
import {useSelector, useDispatch} from "react-redux";
import {changeTheme} from "../../redux/actions/themeActions";

const ThemeSwitch = () => {

    const {theme} = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const [isSwitchOn, setIsSwitchOn] = useState(theme !== "light");

    const onToggleSwitch = () => {
        dispatch(changeTheme(theme));
        setIsSwitchOn(!isSwitchOn)
    }

    return (
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch}/>
    )
}

const styles = StyleSheet.create({
    container: {}
})

export default ThemeSwitch
