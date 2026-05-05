import { Switch, Route, Router as WouterRouter } from "wouter";
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
import SeasonRecaps from "@/pages/season-recaps";
import Season1 from "@/pages/season-1";
import Season2 from "@/pages/season-2";
import Season3 from "@/pages/season-3";
import Contact from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/challenges" component={Challenges} />
      <Route path="/rule-book" component={RuleBook} />
      <Route path="/private-events" component={PrivateEvents} />
      <Route path="/season-recaps" component={SeasonRecaps} />
      <Route path="/season-1" component={Season1} />
      <Route path="/season-2" component={Season2} />
      <Route path="/season-3" component={Season3} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
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
