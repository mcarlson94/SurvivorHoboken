import { Switch, Route, Router as WouterRouter, useLocation, Redirect } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Challenges from "@/pages/challenges";
import RuleBook from "@/pages/rule-book";
import PrivateEvents from "@/pages/private-events";
import BirthdayParties from "@/pages/private-events-birthday";
import CorporateEvents from "@/pages/private-events-corporate";
import BachelorParties from "@/pages/private-events-bachelor";
import FanEngagement from "@/pages/private-events-fan-engagement";
import PrivateGames from "@/pages/private-events-private-games";
import SeasonRecaps from "@/pages/season-recaps";
import Season1 from "@/pages/season-1";
import Season2 from "@/pages/season-2";
import Season3 from "@/pages/season-3";
import Season4 from "@/pages/season-4";
import OneDayGame516 from "@/pages/one-day-game-516";
import OliviaMarcus from "@/pages/olivia-marcus";
import MeetThePlayers from "@/pages/meet-the-players";
import Contact from "@/pages/contact";
import TermsConditions from "@/pages/terms-conditions";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
    <ScrollToTop />
    <Switch>
      <Route path="/" component={Home} />

      {/* Primary routes */}
      <Route path="/about-us" component={About} />
      <Route path="/challenges" component={Challenges} />
      <Route path="/rule-book" component={RuleBook} />
      <Route path="/private-events" component={PrivateEvents} />
      <Route path="/private-events/birthday" component={BirthdayParties} />
      <Route path="/private-events/corporate" component={CorporateEvents} />
      <Route path="/private-events/bachelor" component={BachelorParties} />
      <Route path="/private-events/fan-engagement" component={FanEngagement} />
      <Route path="/private-events/private-games" component={PrivateGames} />
      <Route path="/season-recaps" component={SeasonRecaps} />
      <Route path="/season-1-recap" component={Season1} />
      <Route path="/season-2-recap" component={Season2} />
      <Route path="/season-3-recap" component={Season3} />
      <Route path="/season-4" component={Season4} />
      <Route path="/contact" component={Contact} />
      <Route path="/terms-conditions" component={TermsConditions} />

      {/* Hidden — in sitemap, not in nav */}
      <Route path="/meet-the-players" component={MeetThePlayers} />
      <Route path="/olivia-marcus-survivor-hoboken" component={OliviaMarcus} />

      {/* Direct-link only — noindex */}
      <Route path="/one-day-game-516" component={OneDayGame516} />

      {/* Legacy redirects */}
      <Route path="/about" component={() => <Redirect to="/about-us" />} />
      <Route path="/season-1" component={() => <Redirect to="/season-1-recap" />} />
      <Route path="/season-2" component={() => <Redirect to="/season-2-recap" />} />
      <Route path="/season-3" component={() => <Redirect to="/season-3-recap" />} />
      <Route path="/survivor-birthday-party" component={() => <Redirect to="/private-events/birthday" />} />
      <Route path="/private-events-corporate-team-building" component={() => <Redirect to="/private-events/corporate" />} />
      <Route path="/szn1-recap" component={() => <Redirect to="/season-1-recap" />} />
      <Route path="/category/events" component={() => <Redirect to="/private-events" />} />
      <Route path="/category/season-recaps" component={() => <Redirect to="/season-recaps" />} />
      <Route path="/schedule" component={() => <Redirect to="/" />} />

      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex flex-col min-h-[100dvh]">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
