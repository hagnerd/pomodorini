import Typography from 'typography';
import kirkham from 'typography-theme-kirkham';

kirkham.bodyColor = '#474F5C';
kirkham.headerColor = '#2D3441';
kirkham.overrideThemeStyles = () => ({
  a: {
    color: '#DD7676',
  },
  'a:hover': {
    color: '#DE6351',
  },
});

const typography = new Typography(kirkham);

export default typography;
export const scale = typography.scale;
export const rhythm = typography.rhythm;
