import globalConfig from '@config/config';

const config = {
  height: {
    sm: '20vh',
    xs: '30vh',
  },
  tagFilterElement: {
    width: 1,
    height: 1,
    maxHeight: 1,
    padding: 2,
    borderBottom: 1,
    borderRadius: 2,
    borderColor: 'grey.300',
    ...globalConfig.styleNoScrollbar,
  },
};

export default config;
