import React from "react";

import {
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow,
} from "../../../src/styles/styled";

import ScrollContainer from "./ScrollContainer";
import { Lang } from "../../_app";
import {
  RELATED_TRIALS_HEADER,
  RELATED_TRIALS_TABLE,
} from "../../../constants/apexell";

interface Props {
  lang: Lang;
}

const RelatedPaperTable = ({ lang }: Props) => {
  if(!RELATED_TRIALS_HEADER[lang]) return
  return (
    <ScrollContainer>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              {RELATED_TRIALS_HEADER[lang].map((header) => (
                <TableHeader key={header}>{header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {RELATED_TRIALS_TABLE[lang].map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.publishDate}</TableCell>
                <TableCell>{row.journal}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </ScrollContainer>
  );
};

export default RelatedPaperTable;
