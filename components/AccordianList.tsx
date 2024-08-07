import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataTable from './DataTable';
import tableData from '../config/tableData.json';
import InfoCard from './InfoCard';

interface AccordianListProps {
  items: {
    id: string,
    title: string,
    description: string,
    hasTableData: boolean,
    children?: { title: string, content: string }[],
  }[];
}

/**
 * AccordianList has two display options, table data or children
 */
export default function AccordianList({ items }: AccordianListProps) {
  return (
    <div>
      {items.map((item, idx) => (
        <Accordion key={`item-${idx}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {item.title}
          </AccordionSummary>
          {/* <Box
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
            }}
            alt="flatirons"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsnowbrains.com%2Fwp-content%2Fuploads%2F2017%2F10%2FBoulder-Flatirons-%40roblantzphoto-Instagram-OutThere-Colorado-1024x683-min.jpg&f=1&nofb=1&ipt=636f1a93acb3d2308c950c893cfd7a2f15f451984f0828d6f0095ec73b142907&ipo=images"
          />
          <Box /> */}
          <AccordionDetails>
            {item.hasTableData ? (
              <DataTable
                tableData={tableData[item.id as keyof typeof tableData]}
              />
            ) : (
              <>
                {item.children &&
                  item.children.map((child, idx) => (
                    <InfoCard
                      key={idx}
                      title={child.title}
                      description={child.content}
                    />
                  ))}
              </>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
