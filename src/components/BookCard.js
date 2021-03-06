import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { Avatar, Chip, Stack } from '@mui/material';
import layersLogo from '../assets/layers.png';
import studyLogo from '../assets/study.png';
import { useTranslation } from 'react-i18next';

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const getTitle = (title, truncated, chars = 30) => {
  if (truncated && title.length > chars) {
    return `${title.substring(0, chars)} ...`;
  }

  return title;
};

export default function BookCard({ name, editionCount, firstPublishYear, pages, readTime }) {
  const { t } = useTranslation();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card variant="outlined" sx={{ background: '#F4F4F4', border: 0 }}>
      <CardActions disableSpacing>
        <Typography variant="subtitle1" sx={{ color: '#707090' }} gutterBottom>
          {name && getTitle(name, !expanded, 30)}
        </Typography>

        <ExpandMore expand={expanded} onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            {Boolean(editionCount) && (
              <Chip
                sx={{ background: '#82C786', borderRadius: '3px', color: '#ffffff', height: 27 }}
                label={`${editionCount} ${t('bookAddition')}`}
              />
            )}
            {firstPublishYear && (
              <Typography variant="body1" sx={{ color: '#AAAAAA', alignSelf: 'center' }}>
                {t('firstPublishYear')}: {firstPublishYear}
              </Typography>
            )}
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ marginTop: 3.4 }}>
            {pages && (
              <Chip
                avatar={<Avatar alt="layer logo" sx={{ width: 4, height: 4 }} src={layersLogo} />}
                label={`${pages} ${t('totalPages')}`}
                sx={{ color: '#AAAAAA', fontSize: 14, border: 0 }}
                variant="outlined"
              />
            )}
            {readTime && (
              <Chip
                avatar={<Avatar alt="study logo" src={studyLogo} />}
                label={`${readTime} ${t('hoursReadTime')}`}
                sx={{ color: '#AAAAAA', fontSize: 14, border: 0 }}
                variant="outlined"
              />
            )}
          </Stack>
        </CardContent>
      </Collapse>
    </Card>
  );
}
