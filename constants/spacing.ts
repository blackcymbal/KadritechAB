import theme from "./theme";

export type SpacingProps = {
  m?: keyof typeof theme.spacing;
  mt?: keyof typeof theme.spacing;
  mb?: keyof typeof theme.spacing;
  mr?: keyof typeof theme.spacing;
  ml?: keyof typeof theme.spacing;
  mx?: keyof typeof theme.spacing;
  my?: keyof typeof theme.spacing;
  p?: keyof typeof theme.spacing;
  pt?: keyof typeof theme.spacing;
  pb?: keyof typeof theme.spacing;
  pr?: keyof typeof theme.spacing;
  pl?: keyof typeof theme.spacing;
  px?: keyof typeof theme.spacing;
  py?: keyof typeof theme.spacing;
};

export function getSpacingValue({
  m,
  mt,
  mb,
  mr,
  ml,
  mx,
  my,
  p,
  pt,
  pb,
  pr,
  pl,
  px,
  py,
}: SpacingProps) {
  return {
    margin: m !== undefined ? theme.spacing[m] : undefined,
    marginTop: mt !== undefined ? theme.spacing[mt] : undefined,
    marginBottom: mb !== undefined ? theme.spacing[mb] : undefined,
    marginRight: mr !== undefined ? theme.spacing[mr] : undefined,
    marginLeft: ml !== undefined ? theme.spacing[ml] : undefined,
    marginHorizontal: mx !== undefined ? theme.spacing[mx] : undefined,
    marginVertical: my !== undefined ? theme.spacing[my] : undefined,
    padding: p !== undefined ? theme.spacing[p] : undefined,
    paddingTop: pt !== undefined ? theme.spacing[pt] : undefined,
    paddingBottom: pb !== undefined ? theme.spacing[pb] : undefined,
    paddingRight: pr !== undefined ? theme.spacing[pr] : undefined,
    paddingLeft: pl !== undefined ? theme.spacing[pl] : undefined,
    paddingHorizontal: px !== undefined ? theme.spacing[px] : undefined,
    paddingVertical: py !== undefined ? theme.spacing[py] : undefined,
  };
}
