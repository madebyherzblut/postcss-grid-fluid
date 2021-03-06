const tests = {
  input: `@gf {
  gutter: 1.5rem;
}

.row {
  gf: row;
}

.blob {
  gf: blob;
}

.blob-1 {
  gf: blob 1
}

.blob-1-8 {
  gf: blob 1/8;
}

.blob-1-3 {
  gf: blob 1/3;
}

@gf {
  gutter: 10px;
  display: float;
}

.row-float {
  gf: row;
}

.blob-2-5 {
  gf: blob 2/5;
}

.blob-3-5 {
  gf: blob 3/5;
}

.blob-4-7 {
  gf: blob 4/7;
}
`,
  output: `.row {
  clear: both;
  margin-right: -1.5rem;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  align-content: flex-start;
}

.row::after {
  content: "";
  display: table;
  clear: both;
}

.blob {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(100% - 1.5rem);
}

.blob-1 {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(100% - 1.5rem)
}

.blob-1-8 {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(12.5% - 1.5rem);
}

.blob-1-3 {
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  flex: 0 1 calc(33.333333333333336% - 1.5rem);
}

.row-float {
  clear: both;
  margin-right: -10px;
}

.row-float::after {
  content: "";
  display: table;
  clear: both;
}

.blob-2-5 {
  margin-right: 10px;
  margin-bottom: 10px;
  width: calc(40% - 10px);
  float: left;
}

.blob-3-5 {
  margin-right: 10px;
  margin-bottom: 10px;
  width: calc(60% - 10px);
  float: left;
}

.blob-4-7 {
  margin-right: 10px;
  margin-bottom: 10px;
  width: calc(57.142857142857146% - 10px);
  float: left;
}
`,
};

export default tests;
