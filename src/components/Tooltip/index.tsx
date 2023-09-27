
import TooltipMUI, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <TooltipMUI {...props} classes={{ popper: className }} />
))(({ theme, color }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: color,
    color: '#ffffff',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(16),
    border: '1px solid #dadde9',
  },
  [`& .${tooltipClasses.arrow}`]: {
    "&:before": {
      border: `1px solid ${color}`
    },
    color
  }
}));

export default Tooltip;
