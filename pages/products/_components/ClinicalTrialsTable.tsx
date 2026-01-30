import React from "react";

import {
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "../../../src/styles/styled";

import ScrollContainer from "./ScrollContainer";
import {
  CLINICAL_TRIALS_HEADER,
  CLINICAL_TRIALS_TABLE,
} from "../../../constants/apexell";
import { Lang } from "../../_app";

interface Props {
  lang: Lang;
}

const ClinicalTrialsTable = ({ lang }: Props) => {
  if(!CLINICAL_TRIALS_HEADER[lang]) return
  return (
    <ScrollContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              {CLINICAL_TRIALS_HEADER[lang].map((header) => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {CLINICAL_TRIALS_TABLE[lang].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.year}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.phase}</TableCell>
                <TableCell>{row.disease}</TableCell>
                <TableCell>{row.result}</TableCell>
                <TableCell>{row.remark}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </ScrollContainer>
  );
};

export default ClinicalTrialsTable;
