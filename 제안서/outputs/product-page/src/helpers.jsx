import React from "react";
import { Slide, Heading, Text, FlexBox, Box, Appear } from "spectacle";

/* ── 디자인 토큰 ── */
export const BG = "#FFFFFF";
export const BG2 = "#F8FAFC";
export const IND = "#6366F1";
export const VIO = "#7C3AED";
export const RED = "#EF4444";
export const GRN = "#10B981";
export const AMB = "#F59E0B";
export const DARK_BG = "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #312E81 100%)";
export const SECTION_BG = "linear-gradient(135deg, #6366F1, #4F46E5)";

/* ── Pill 뱃지 ── */
export const Pill = ({ children, color = IND, transparent = false }) => (
  <Box
    style={{
      display: "inline-block",
      background: transparent ? "rgba(255,255,255,0.15)" : color,
      borderRadius: "999px",
      padding: "8px 24px",
      fontSize: "14px",
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "0.04em",
      backdropFilter: transparent ? "blur(4px)" : "none",
    }}
  >
    {children}
  </Box>
);

/* ── Card ── */
export const Card = ({ children, accent = false, borderLeft, style = {} }) => (
  <Box
    style={{
      background: accent ? "linear-gradient(135deg, #6366F1, #7C3AED)" : "#F8FAFC",
      borderRadius: "16px",
      padding: "28px",
      border: accent ? "none" : "1px solid #E2E8F0",
      borderLeft: borderLeft ? `4px solid ${borderLeft}` : undefined,
      ...style,
    }}
  >
    {children}
  </Box>
);

/* ── 숫자 동그라미 ── */
export const Num = ({ n }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 34,
      height: 34,
      borderRadius: "50%",
      background: IND,
      color: "#fff",
      fontWeight: 700,
      fontSize: 15,
      marginRight: 12,
      flexShrink: 0,
    }}
  >
    {n}
  </span>
);

/* ── 섹션 구분 슬라이드 ── */
export const SectionSlide = ({ number, title, subtitle }) => (
  <Slide backgroundImage={SECTION_BG}>
    <FlexBox flexDirection="column" alignItems="center" justifyContent="center" height="100%">
      <Text
        fontSize="80px"
        fontWeight="900"
        color="rgba(255,255,255,0.2)"
        fontFamily="Outfit"
        style={{ margin: "0 0 -10px", lineHeight: 1 }}
      >
        {number}
      </Text>
      <Heading fontSize="52px" color="#FFFFFF" fontFamily="Outfit" style={{ textAlign: "center", margin: "0 0 12px" }}>
        {title}
      </Heading>
      {subtitle && (
        <Text fontSize="20px" color="rgba(255,255,255,0.8)" style={{ margin: 0, textAlign: "center" }}>
          {subtitle}
        </Text>
      )}
    </FlexBox>
  </Slide>
);

/* ── 테이블 행 ── */
export const TableRow = ({ cells, header = false, highlight = false }) => (
  <FlexBox
    justifyContent="space-between"
    style={{
      padding: "12px 16px",
      borderBottom: header ? "none" : "1px solid #E2E8F0",
      background: header
        ? "linear-gradient(135deg, #6366F1, #4F46E5)"
        : highlight
        ? "rgba(99,102,241,0.08)"
        : "transparent",
      borderRadius: header ? "10px 10px 0 0" : 0,
    }}
  >
    {cells.map((cell, i) => (
      <Text
        key={i}
        fontSize={header ? "13px" : "15px"}
        fontWeight={header ? 700 : highlight && i === cells.length - 1 ? 700 : 400}
        color={header ? "#FFFFFF" : highlight && i === cells.length - 1 ? IND : i === 0 ? "#334155" : "#64748B"}
        style={{ margin: 0, width: `${100 / cells.length}%`, textAlign: i === 0 ? "left" : "center" }}
      >
        {cell}
      </Text>
    ))}
  </FlexBox>
);

/* ── 그래디언트 텍스트 ── */
export const GradientText = ({ children }) => (
  <span style={{ background: "linear-gradient(90deg, #818CF8, #C4B5FD)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
    {children}
  </span>
);

/* ── 하이라이트 박스 ── */
export const HighlightBox = ({ children, style = {} }) => (
  <Box
    style={{
      background: "rgba(99,102,241,0.06)",
      border: `1px solid ${IND}`,
      borderRadius: 12,
      padding: "20px 24px",
      ...style,
    }}
  >
    {children}
  </Box>
);
