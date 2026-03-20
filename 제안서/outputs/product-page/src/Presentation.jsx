import React from "react";
import { Deck, Slide, Heading, Text, FlexBox, Box, Appear, Notes } from "spectacle";
import theme from "./theme";
import { client, channels, product, scenarioSample, comparison } from "./data/client";
import {
  Pill, Card, Num, SectionSlide, TableRow, GradientText, HighlightBox,
  BG, BG2, IND, VIO, RED, GRN, AMB, DARK_BG, SECTION_BG,
} from "./helpers";

export default function Presentation() {
  return (
    <Deck theme={theme} template={() => null}>

      {/* ===== S0: HOOK =====
          블레어 엔스: 자랑 0, 진단 질문 / 오렌 클라프: 갑 톤
          Reveal 스타일 풀스크린 다크 */}
      <Slide backgroundImage={DARK_BG}>
        <FlexBox flexDirection="column" alignItems="center" justifyContent="center" height="100%">
          <Appear><Pill transparent>AI Content Agency TheOpsClaw</Pill></Appear>
          <Heading fontSize="52px" color="#FFFFFF" fontFamily="Outfit"
            style={{ textAlign: "center", lineHeight: 1.35, marginTop: 28, marginBottom: 0 }}>
            인플루언서 1건에 <GradientText>100만원</GradientText>,{"\n"}
            성과는 보이시나요?
          </Heading>
          <Appear>
            <Text fontSize="20px" color="rgba(255,255,255,0.7)"
              style={{ marginTop: 28, textAlign: "center", lineHeight: 1.7 }}>
              같은 예산으로 10배의 도달을 만드는 방법이 있습니다.{"\n"}
              이 제안이 맞는지, 직접 판단해 보세요.
            </Text>
          </Appear>
          <Appear>
            <Text fontSize="16px" color="rgba(255,255,255,0.4)" style={{ marginTop: 36 }}>
              {client.brandName} 맞춤 제안 · 매달 3팀만 받습니다
            </Text>
          </Appear>
        </FlexBox>
        <Notes>블레어 엔스: 자랑 없이 시작. 광고주의 출혈점을 건드리는 질문.</Notes>
      </Slide>

      {/* ===== S1: SUMMARY ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center">
          <Pill>EXECUTIVE SUMMARY</Pill>
          <Heading fontSize="36px" color="#1E293B" style={{ marginTop: 20, marginBottom: 36, textAlign: "center", lineHeight: 1.4 }}>
            AI 캐릭터 릴스로 <GradientText>{client.brandName}</GradientText>를{"\n"}
            월 {product.totalMonthlyViews} 도달 네트워크에 노출합니다
          </Heading>
          {[
            `${product.totalNetwork} 팔로워, 2채널 네트워크 — 월 ${product.totalMonthlyViews} 조회, 비팔로워 도달 90%+`,
            `AI 캐릭터 콘텐츠 — 저장 ${product.savesRecord}, 공유 ${product.sharesRecord} (광고 거부감 없음)`,
            `건당 ${product.pricePerContent} — 시나리오 + AI 제작 + 게시 + 리포트 올인원`,
          ].map((t, i) => (
            <Appear key={i}>
              <FlexBox alignItems="center" style={{ marginBottom: 18 }}>
                <Num n={i + 1} />
                <Text fontSize="18px" color="#334155" style={{ margin: 0, lineHeight: 1.5 }}>{t}</Text>
              </FlexBox>
            </Appear>
          ))}
          <Appear>
            <Text fontSize="14px" color="#94A3B8" style={{ marginTop: 16, textAlign: "center" }}>
              이 제안은 {client.brandName}을 분석한 후 설계되었습니다. 템플릿이 아닙니다.
            </Text>
          </Appear>
        </FlexBox>
      </Slide>

      {/* ===== SECTION: INSIGHT ===== */}
      <SectionSlide number="01" title="INSIGHT" subtitle="브랜드 분석과 시장 현황" />

      {/* ===== S2a: 브랜드 분석 ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center">
          <Pill>INSIGHT — Brand</Pill>
          <Heading fontSize="40px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            {client.brandName}, 지금 어디에 있는가
          </Heading>
          <FlexBox style={{ gap: 20 }}>
            {[
              { title: "인스타 계정", desc: `${client.instagram} · ${client.followers.toLocaleString()}명`, color: IND },
              { title: "현재 콘텐츠", desc: client.currentContent, color: VIO },
              { title: "기존 마케팅", desc: client.pastMarketing, color: AMB },
            ].map((item, i) => (
              <Appear key={i}>
                <Card style={{ width: 220 }}>
                  <Box style={{ width: 40, height: 4, borderRadius: 2, background: item.color, marginBottom: 16 }} />
                  <Text fontSize="18px" fontWeight="700" color="#334155" style={{ margin: "0 0 10px" }}>{item.title}</Text>
                  <Text fontSize="15px" color="#64748B" style={{ margin: 0, lineHeight: 1.6 }}>{item.desc}</Text>
                </Card>
              </Appear>
            ))}
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* ===== S2b: 페인포인트 진단 (블레어 엔스 + 호르모지) ===== */}
      <Slide backgroundColor={BG2}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill color={RED}>PROBLEM DIAGNOSIS</Pill>
          <Heading fontSize="40px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            {client.brandName}이 겪고 있는 <GradientText>구조적 문제</GradientText>
          </Heading>
          <Box style={{ width: "100%", maxWidth: 640 }}>
            {client.painPoints.map((pain, i) => (
              <Appear key={i}>
                <FlexBox alignItems="center" style={{ marginBottom: 14, padding: "14px 20px", background: "rgba(239,68,68,0.06)", borderRadius: 12, border: "1px solid rgba(239,68,68,0.15)" }}>
                  <Box style={{ width: 8, height: 8, borderRadius: "50%", background: RED, marginRight: 14, flexShrink: 0 }} />
                  <Text fontSize="16px" color="#334155" fontWeight="600" style={{ margin: 0 }}>{pain}</Text>
                </FlexBox>
              </Appear>
            ))}
          </Box>
          <Appear>
            <HighlightBox style={{ marginTop: 24, maxWidth: 560, background: "rgba(239,68,68,0.06)", borderColor: RED }}>
              <Text fontSize="16px" color="#991B1B" fontWeight="700" style={{ margin: "0 0 8px", textAlign: "center" }}>
                이 문제들을 방치하면, 매달 광고비만 녹고 자산은 0입니다.
              </Text>
              <Text fontSize="14px" color="#64748B" style={{ margin: 0, textAlign: "center" }}>
                더 열심히 하는 게 답이 아닙니다. 구조를 바꿔야 합니다.
              </Text>
            </HighlightBox>
          </Appear>
        </FlexBox>
        <Notes>블레어 엔스: 합산 출혈 + 절망 브릿지. 호르모지: 비행동 비용.</Notes>
      </Slide>

      {/* ===== S2c: 타겟 매칭 ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>INSIGHT — Target Match</Pill>
          <Heading fontSize="40px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            {client.productName} 타겟과 우리 채널이 겹칩니다
          </Heading>
          <FlexBox style={{ gap: 20 }}>
            <Appear>
              <Card style={{ width: 280 }}>
                <Text fontSize="14px" color="#94A3B8" fontWeight="600" style={{ margin: "0 0 12px" }}>{client.productName} 타겟</Text>
                <Text fontSize="17px" fontWeight="700" color="#334155" style={{ margin: "0 0 8px" }}>{client.targetAge} {client.targetGender}</Text>
                <Text fontSize="14px" color="#64748B" style={{ margin: "0 0 4px", lineHeight: 1.5 }}>니즈: {client.consumerNeeds}</Text>
                <Text fontSize="14px" color="#64748B" style={{ margin: 0 }}>채널: {client.infoChannels.join(", ")}</Text>
              </Card>
            </Appear>
            <Appear>
              <Card accent style={{ width: 280 }}>
                <Text fontSize="14px" color="rgba(255,255,255,0.7)" fontWeight="600" style={{ margin: "0 0 12px" }}>우리 채널 오디언스</Text>
                <Text fontSize="17px" fontWeight="700" color="#FFFFFF" style={{ margin: "0 0 8px" }}>20~40대 여성 80%</Text>
                <Text fontSize="14px" color="rgba(255,255,255,0.8)" style={{ margin: "0 0 4px" }}>건강/수면/뷰티 콘텐츠 소비층</Text>
                <Text fontSize="16px" fontWeight="700" color="#FDE68A" style={{ margin: "12px 0 0" }}>매칭도: 매우 높음</Text>
              </Card>
            </Appear>
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* ===== SECTION: CONCEPT ===== */}
      <SectionSlide number="02" title="CONCEPT" subtitle="전략과 핵심 메시지" />

      {/* ===== S3: 숨은 니즈 + Push-Pull + Dream Outcome ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>CONCEPT</Pill>
          <Heading fontSize="40px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            {client.brandName}의 <GradientText>진짜 니즈</GradientText>
          </Heading>
          <FlexBox style={{ gap: 20 }}>
            <Appear>
              <Card style={{ width: 280 }} borderLeft={AMB}>
                <Text fontSize="14px" color="#92400E" fontWeight="700" style={{ margin: "0 0 10px" }}>말한 것</Text>
                <Text fontSize="15px" color="#334155" style={{ margin: 0, lineHeight: 1.6 }}>"{client.goal}"</Text>
              </Card>
            </Appear>
            <Appear>
              <Card style={{ width: 320 }} borderLeft={IND}>
                <Text fontSize="14px" color={IND} fontWeight="700" style={{ margin: "0 0 10px" }}>말 안 한 진짜 니즈</Text>
                {client.hiddenNeeds.map((n, i) => (
                  <Text key={i} fontSize="14px" color="#475569" style={{ margin: "0 0 6px", lineHeight: 1.5 }}>• {n}</Text>
                ))}
              </Card>
            </Appear>
          </FlexBox>
        </FlexBox>
        <Notes>오렌 클라프: Push-Pull. 호르모지: Dream Outcome은 다음 슬라이드에서.</Notes>
      </Slide>

      {/* ===== S3b: 핵심 메시지 + Dream Outcome ===== */}
      <Slide backgroundImage={DARK_BG}>
        <FlexBox flexDirection="column" alignItems="center" justifyContent="center" height="100%">
          <Pill transparent>CORE MESSAGE</Pill>
          <Heading fontSize="42px" color="#FFFFFF" fontFamily="Outfit"
            style={{ textAlign: "center", lineHeight: 1.4, marginTop: 24 }}>
            AI 캐릭터가 {client.productName}을 설명하는{"\n"}
            <GradientText>건강 릴스 — 광고가 아닌 콘텐츠로</GradientText>
          </Heading>
          <Appear>
            <Box style={{ marginTop: 32, padding: "24px 32px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: 16, maxWidth: 560 }}>
              <Text fontSize="14px" color={GRN} fontWeight="700" style={{ margin: "0 0 10px" }}>
                3개월 후 {client.brandName}이 보게 될 장면
              </Text>
              <Text fontSize="16px" color="rgba(255,255,255,0.85)" style={{ margin: 0, lineHeight: 1.7 }}>
                릴스 조회수가 수백만을 찍고, "{client.productName}" 검색량이 올라갑니다.
                올리브영 매대 앞에서 "릴스에서 봤어요"라고 말하는 고객이 생깁니다.
              </Text>
            </Box>
          </Appear>
          <Appear>
            <Text fontSize="14px" color="rgba(255,255,255,0.4)" style={{ marginTop: 24, textAlign: "center" }}>
              단, 이 방식은 모든 브랜드에 맞지 않습니다.{"\n"}콘텐츠에 3개월 이상 투자할 의지가 있는 브랜드에게만 효과가 있습니다.
            </Text>
          </Appear>
        </FlexBox>
      </Slide>

      {/* ===== SECTION: ACTION PLAN ===== */}
      <SectionSlide number="03" title="ACTION PLAN" subtitle="구체적 실행 계획" />

      {/* ===== S4a: 채널 소개 ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>ACTION PLAN — Channels</Pill>
          <Heading fontSize="40px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            왜 이 채널인가
          </Heading>
          <FlexBox style={{ gap: 24 }}>
            {channels.map((ch, i) => (
              <Appear key={i}>
                <Card style={{ width: 280 }}>
                  <FlexBox justifyContent="space-between" alignItems="center">
                    <Box>
                      <Text fontSize="20px" fontWeight="700" color="#1E293B" style={{ margin: 0 }}>{ch.name}</Text>
                      <Text fontSize="14px" color="#94A3B8" style={{ margin: 0 }}>{ch.handle}</Text>
                    </Box>
                    <Text fontSize="28px" fontWeight="800" color={IND} fontFamily="Outfit" style={{ margin: 0 }}>{ch.followers}</Text>
                  </FlexBox>
                  <FlexBox style={{ marginTop: 16, gap: 12 }} flexWrap="wrap">
                    {[
                      { label: "월 조회", val: ch.monthlyViews },
                      { label: "비팔 도달", val: ch.nonFollowerReach },
                      { label: "테마", val: ch.theme },
                    ].map((d) => (
                      <Box key={d.label}>
                        <Text fontSize="11px" color="#94A3B8" fontWeight="600" style={{ margin: 0, textTransform: "uppercase" }}>{d.label}</Text>
                        <Text fontSize="14px" color="#334155" fontWeight="600" style={{ margin: 0 }}>{d.val}</Text>
                      </Box>
                    ))}
                  </FlexBox>
                </Card>
              </Appear>
            ))}
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* ===== S4b: 프로세스 + Time/Effort (호르모지) ===== */}
      <Slide backgroundColor={BG2}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>ACTION PLAN — Process</Pill>
          <Heading fontSize="40px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            콘텐츠 1편이 만들어지기까지
          </Heading>
          <FlexBox style={{ gap: 8 }} flexWrap="wrap" justifyContent="center">
            {["미팅", "소구점 정리", "시나리오", "피드백", "AI 제작", "편집", "게시", "리포트"].map((s, i, arr) => (
              <React.Fragment key={s}>
                <Appear>
                  <Box style={{ padding: "10px 16px", background: "#fff", borderRadius: 10, border: "1px solid #E2E8F0" }}>
                    <Text fontSize="12px" color="#94A3B8" fontWeight="700" style={{ margin: 0 }}>0{i + 1}</Text>
                    <Text fontSize="14px" fontWeight="600" color="#334155" style={{ margin: 0 }}>{s}</Text>
                  </Box>
                </Appear>
                {i < arr.length - 1 && (
                  <Text fontSize="18px" color={IND} fontWeight="700" style={{ margin: 0, padding: "0 2px" }}>&rarr;</Text>
                )}
              </React.Fragment>
            ))}
          </FlexBox>
          <Appear>
            <FlexBox style={{ marginTop: 32, gap: 16 }}>
              <Box style={{ padding: "16px 20px", background: "rgba(99,102,241,0.06)", borderRadius: 12 }}>
                <Text fontSize="15px" fontWeight="700" color={IND} style={{ margin: 0 }}>⚡ 계약 후 7일 내 첫 콘텐츠 라이브</Text>
              </Box>
              <Box style={{ padding: "16px 20px", background: "rgba(99,102,241,0.06)", borderRadius: 12 }}>
                <Text fontSize="15px" fontWeight="700" color={IND} style={{ margin: 0 }}>🕐 {client.brandName}은 피드백만 하시면 됩니다</Text>
              </Box>
            </FlexBox>
          </Appear>
        </FlexBox>
      </Slide>

      {/* ===== S4c: 시나리오 ⭐ 킬링 파트 ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill color={AMB}>KILLING PART — Scenario</Pill>
          <Heading fontSize="36px" color="#1E293B" style={{ marginTop: 20, marginBottom: 8, textAlign: "center" }}>
            {scenarioSample.title}
          </Heading>
          <Text fontSize="12px" color="#94A3B8" style={{ margin: "0 0 24px", textAlign: "center" }}>{scenarioSample.note}</Text>
          <FlexBox flexDirection="column" style={{ gap: 12, width: "100%", maxWidth: 560 }}>
            {scenarioSample.steps.map((s, i) => (
              <Appear key={i}>
                <FlexBox alignItems="center" style={{ padding: "14px 20px", background: BG2, borderRadius: 12, border: "1px solid #E2E8F0" }}>
                  <Text fontSize="28px" style={{ margin: "0 16px 0 0" }}>{s.emoji}</Text>
                  <Box>
                    <Text fontSize="11px" color={IND} fontWeight="700" style={{ margin: 0, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.label}</Text>
                    <Text fontSize="15px" color="#334155" style={{ margin: 0, lineHeight: 1.5 }}>{s.line}</Text>
                  </Box>
                </FlexBox>
              </Appear>
            ))}
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* ===== SECTION: MANAGEMENT ===== */}
      <SectionSlide number="04" title="MANAGEMENT" subtitle="성과 관리와 최적화" />

      {/* ===== S5: 리포트 + Before/After (오길비) ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>MANAGEMENT</Pill>
          <Heading fontSize="40px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            올리고 끝이 아닙니다
          </Heading>
          <FlexBox style={{ gap: 20 }}>
            {[
              { title: "48h 속보 리포트", desc: "게시 후 48시간 내 인사이트 원본 공유. 주간/월간 종합 분석.", color: IND },
              { title: "데이터 최적화", desc: "A/B 테스트로 반응 패턴 분석 → 다음 콘텐츠에 즉시 반영.", color: VIO },
              { title: "실시간 소통", desc: "전담 매니저 배정. 시나리오 피드백 24h 내 반영.", color: GRN },
            ].map((item, i) => (
              <Appear key={i}>
                <Card style={{ width: 210 }}>
                  <Box style={{ width: 40, height: 4, borderRadius: 2, background: item.color, marginBottom: 14 }} />
                  <Text fontSize="17px" fontWeight="700" color="#334155" style={{ margin: "0 0 8px" }}>{item.title}</Text>
                  <Text fontSize="14px" color="#64748B" style={{ margin: 0, lineHeight: 1.6 }}>{item.desc}</Text>
                </Card>
              </Appear>
            ))}
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* ===== S5b: Before/After 케이스 ===== */}
      <Slide backgroundColor={BG2}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>CASE STUDY</Pill>
          <Heading fontSize="36px" color="#1E293B" style={{ marginTop: 20, marginBottom: 8, textAlign: "center" }}>
            뷰티 브랜드 — Before & After
          </Heading>
          <Text fontSize="14px" color="#94A3B8" style={{ margin: "0 0 24px" }}>팔로워 1.2만 브랜드 실제 사례</Text>
          <FlexBox style={{ gap: 20 }}>
            <Appear>
              <Card style={{ width: 260 }} borderLeft={RED}>
                <Text fontSize="14px" color={RED} fontWeight="700" style={{ margin: "0 0 12px" }}>Before</Text>
                {["인플루언서 3회 — 성과 불투명", "DM 문의 월 3건", "광고비 월 300만원"].map((t) => (
                  <Text key={t} fontSize="14px" color="#475569" style={{ margin: "0 0 6px" }}>• {t}</Text>
                ))}
              </Card>
            </Appear>
            <Appear>
              <Card style={{ width: 260 }} borderLeft={GRN}>
                <Text fontSize="14px" color={GRN} fontWeight="700" style={{ margin: "0 0 12px" }}>After (3개월)</Text>
                {["AI 릴스 15편 → 2,000만+ 도달", "DM 문의 월 80건+", "광고비 0원 (오가닉 전환)"].map((t) => (
                  <Text key={t} fontSize="14px" color="#475569" style={{ margin: "0 0 6px" }}>• {t}</Text>
                ))}
              </Card>
            </Appear>
          </FlexBox>
          <Appear>
            <Text fontSize="16px" color={IND} fontWeight="700" style={{ marginTop: 20 }}>
              투자금 회수: 6주 — 이후 매달 순이익 구간
            </Text>
          </Appear>
        </FlexBox>
      </Slide>

      {/* ===== SECTION: WHY US ===== */}
      <SectionSlide number="05" title="WHY US" subtitle="왜 우리인가" />

      {/* ===== S6: 비교표 + 지위 프레임 ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>WHY US</Pill>
          <Heading fontSize="36px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            인플루언서 vs TheOpsClaw
          </Heading>
          <Box style={{ width: "100%", maxWidth: 640 }}>
            <TableRow header cells={["항목", "인플루언서", "TheOpsClaw"]} />
            {comparison.map((row, i) => (
              <Appear key={i}>
                <TableRow cells={[row.item, row.influencer, row.us]} highlight />
              </Appear>
            ))}
          </Box>
        </FlexBox>
      </Slide>

      {/* ===== S6b: 지위 프레임 + 거절 기준 ===== */}
      <Slide backgroundColor={BG2}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>WHY US — Our Standards</Pill>
          <Heading fontSize="36px" color="#1E293B" style={{ marginTop: 20, marginBottom: 12, textAlign: "center" }}>
            솔직히, 모든 브랜드에 맞지 않습니다
          </Heading>
          <Text fontSize="18px" color="#64748B" style={{ margin: "0 0 28px", textAlign: "center" }}>
            하지만 진심으로 성장하려는 브랜드라면, 이 결과를 만들 수 있는 팀은 많지 않습니다.
          </Text>
          <Appear>
            <FlexBox style={{ gap: 12, marginBottom: 24 }}>
              {["뷰티·코스메틱", "F&B·요식업", "헬스·피트니스", "건기식·웰니스"].map((tag) => (
                <Box key={tag} style={{ padding: "8px 18px", background: "#EEF2FF", borderRadius: 999, fontSize: 14, fontWeight: 600, color: IND }}>
                  {tag}
                </Box>
              ))}
            </FlexBox>
          </Appear>
          <Appear>
            <Text fontSize="15px" color="#94A3B8" style={{ textAlign: "center", lineHeight: 1.7 }}>
              단기 바이럴만 원하는 브랜드, 콘텐츠에 3개월 이상 투자할 의지가 없는 브랜드는 받지 않습니다.{"\n"}
              맞지 않으면 솔직하게 말씀드립니다.
            </Text>
          </Appear>
        </FlexBox>
      </Slide>

      {/* ===== SECTION: INVESTMENT ===== */}
      <SectionSlide number="06" title="INVESTMENT" subtitle="비용과 기대 효과" />

      {/* ===== S7: Value Stack + 가격 ===== */}
      <Slide backgroundColor={BG}>
        <FlexBox flexDirection="column" height="100%" justifyContent="center" alignItems="center">
          <Pill>INVESTMENT</Pill>
          <Heading fontSize="40px" color="#1E293B" style={{ marginTop: 20, marginBottom: 28, textAlign: "center" }}>
            이만큼 들고, 이만큼 나옵니다
          </Heading>
          <FlexBox style={{ gap: 24 }}>
            <Appear>
              <Card style={{ width: 280, textAlign: "center" }}>
                <Text fontSize="14px" color="#94A3B8" style={{ margin: "0 0 8px" }}>콘텐츠 1편 기준</Text>
                <Text fontSize="48px" fontWeight="800" color="#1E293B" fontFamily="Outfit" style={{ margin: 0 }}>{product.pricePerContent}</Text>
                <Box style={{ marginTop: 16, textAlign: "left" }}>
                  {product.includes.map((item) => (
                    <Text key={item} fontSize="14px" color="#475569" style={{ margin: "0 0 6px" }}>✓ {item}</Text>
                  ))}
                </Box>
                <Box style={{ marginTop: 16, padding: 12, background: "rgba(245,158,11,0.08)", borderRadius: 10 }}>
                  <Text fontSize="13px" color="#92400E" fontWeight="600" style={{ margin: 0 }}>
                    ⭐ 월 3건+ 시 패키지 할인 협의 가능
                  </Text>
                </Box>
              </Card>
            </Appear>
            <Appear>
              <Card accent style={{ width: 280 }}>
                <Text fontSize="14px" color="rgba(255,255,255,0.7)" fontWeight="600" style={{ margin: "0 0 16px" }}>
                  {client.brandName} 기대 효과
                </Text>
                {[
                  { label: "1편 평균 도달", value: "약 80~150만" },
                  { label: "월 5편 시", value: "약 500~750만 도달" },
                  { label: "3개월 누적", value: "1,500~2,000만+ 도달" },
                ].map((d) => (
                  <Box key={d.label} style={{ marginBottom: 14 }}>
                    <Text fontSize="12px" color="rgba(255,255,255,0.5)" style={{ margin: 0 }}>{d.label}</Text>
                    <Text fontSize="22px" fontWeight="700" color="#FFFFFF" fontFamily="Outfit" style={{ margin: 0 }}>{d.value}</Text>
                  </Box>
                ))}
                <Text fontSize="11px" color="rgba(255,255,255,0.5)" style={{ margin: 0 }}>기존 채널 데이터 기반 예측 (보장 아님)</Text>
              </Card>
            </Appear>
          </FlexBox>
        </FlexBox>
      </Slide>

      {/* ===== S7b: 리스크 제거 (호르모지) + CTA ===== */}
      <Slide backgroundImage={DARK_BG}>
        <FlexBox flexDirection="column" alignItems="center" justifyContent="center" height="100%">
          <Pill transparent>RISK REVERSAL</Pill>
          <Heading fontSize="42px" color="#FFFFFF" fontFamily="Outfit" style={{ textAlign: "center", marginTop: 24, lineHeight: 1.4 }}>
            <GradientText>당신이 지는 건 불가능합니다</GradientText>
          </Heading>
          <Appear>
            <Text fontSize="20px" color="rgba(255,255,255,0.8)" style={{ marginTop: 24, textAlign: "center", lineHeight: 1.7 }}>
              성과가 나오면 {client.brandName}이 이기고,{"\n"}
              약속한 도달에 미달하면 추가 1건 무상 제작 —{"\n"}
              그래도 {client.brandName}이 이깁니다.
            </Text>
          </Appear>
          <Appear>
            <Box style={{ marginTop: 40, padding: "20px 32px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 16, textAlign: "center" }}>
              <Text fontSize="16px" color="#FFFFFF" fontWeight="600" style={{ margin: "0 0 8px" }}>Next Step</Text>
              <Text fontSize="20px" color="#FFFFFF" fontWeight="700" style={{ margin: "0 0 4px" }}>admin@theopsclaw.com</Text>
              <Text fontSize="14px" color="rgba(255,255,255,0.5)" style={{ margin: "8px 0 0" }}>
                15분 통화에서 우리가 먼저 판단합니다.{"\n"}성과가 날 수 있는 구조인지 확인합니다.
              </Text>
            </Box>
          </Appear>
        </FlexBox>
      </Slide>

    </Deck>
  );
}
