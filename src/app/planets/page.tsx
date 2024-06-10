"use client";
import { AppContext } from "@/AppContext";
import { Api } from "@/api";
import Aside from "@/components/Aside";
import { Button } from "@/components/Button";
import MainContainer from "@/components/MainContainer";
import MainDiv from "@/components/MainDiv";
import RootDiv from "@/components/RootDiv";
import StatusBar from "@/components/StatusBar";
import Planet from "@/types/Planet";
import PlanetJson from "@/types/PlanetJson";
import { createContext, useEffect, useState } from "react";
import reloadIcon from "@/assets/icons/reload.svg"
import { IconButton } from "@/components/IconButton";
import { H2 } from "@/components/H2";

export default function Planets() {
	const [planets, setPlanets] = useState<Planet[]>([]);
	const [currentUrl, setCurrentUrl] = useState("");
	const [nextUrl, setNextUrl] = useState("");
	const [prevUrl, setPrevUrl] = useState("");
	const [statusMessage, setStatusMessage] = useState("");
	const [hasErrorOccured, setHasErrorOccured] = useState(false);
	const [selectedPlanetId, setSelectedPlanetId] = useState(-1);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData(url: string = "") {
		setSelectedPlanetId(-1);
		setHasErrorOccured(false);
		setStatusMessage("Načítání...")

		try {
			if (url === "") {
				const {planets, nextUrl, prevUrl} = await Api.fetchData();
				setPlanets(planets);
				setNextUrl(nextUrl);
				setPrevUrl(prevUrl);
				setCurrentUrl("");
				console.log("next url:" + nextUrl);
			} else {
				const {planets, nextUrl, prevUrl} = await Api.fetchData(url);
				setPlanets(planets);
				setNextUrl(nextUrl);
				setPrevUrl(prevUrl);
				setCurrentUrl(url);
				console.log("next url:" + nextUrl);
			}
		} catch (e) {
			setStatusMessage("Chyba – " + (e as Error).message);
			setHasErrorOccured(true);
			return;
		}

		setStatusMessage("");
		setSelectedPlanetId(0);
	}

	return (
		<>
			<AppContext.Provider value={{planets, setPlanets}}>
				<RootDiv>
					<StatusBar message={statusMessage} error={hasErrorOccured} />
					<MainContainer>
						<Aside selectedPlanetId={selectedPlanetId} setSelectedPlanetId={setSelectedPlanetId}>
							<H2>Planety</H2>
							<IconButton onClick={() => fetchData(currentUrl)}>
								<img src="/reload.svg" alt="Reload" />
							</IconButton>
							<IconButton onClick={() => fetchData(prevUrl)}
										disabled={prevUrl === null}>
								<img src="/arrow-left.svg" alt="Arrow" />
							</IconButton>
							<IconButton onClick={() => fetchData(nextUrl)}
									disabled={nextUrl === null}>
								<img src="/arrow-right.svg" alt="Arrow" />
							</IconButton>
							<IconButton className="float-right" onClick={() => fetchData("error")}>Err</IconButton>
						</Aside>
						<MainDiv selectedPlanetId={selectedPlanetId} />
					</MainContainer>
				</RootDiv>
			</AppContext.Provider>
		</>
	);
}
