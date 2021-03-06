import postcss from 'postcss';

export default (decl, margin, display) => {
  const clearfixRule = postcss.rule({ selector: `${decl.parent.selector}::after` });
  clearfixRule.append({ prop: 'content', value: '""' });
  clearfixRule.append({ prop: 'display', value: 'table' });
  clearfixRule.append({ prop: 'clear', value: 'both' });
  clearfixRule.moveAfter(decl.parent);

  let declNew = [
    postcss.decl({ prop: 'clear', value: 'both' }),
  ];

  if (margin !== '0') {
    declNew.push(postcss.decl({ prop: 'margin-right', value: `-${margin}` }));
  }

  if (display === 'flex') {
    declNew = declNew.concat([
      postcss.decl({ prop: 'display', value: 'flex' }),
      postcss.decl({ prop: 'flex-flow', value: 'row wrap' }),
      postcss.decl({ prop: 'align-items', value: 'flex-start' }),
      postcss.decl({ prop: 'align-content', value: 'flex-start' }),
    ]);
  }

  decl.replaceWith(declNew);
};
