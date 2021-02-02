import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.padding,
  },
  innerContainer: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.radius,
  },
  wrapper: {
    flex: 1,
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  text: {
    marginLeft: SIZES.base,
    ...FONTS.body3,
    color: COLORS.white,
  },
});

export default Styles;
