import React, { useState } from "react";
import { Button } from "@/components/ui/button-figma";

export default function Index() {
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleButtonClick = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-foreground">
            <div>
              Primary Button
              <br />
            </div>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            <span>
              Button component with iOS-style smooth corners and fluid
              animations.&nbsp;
            </span>
            <span className="text-blue-500 text-xl">
              <a href="https://github.com/inktech-design/builder-primary-button">
                Repository
              </a>
            </span>
          </p>
        </div>

        {/* Button States Showcase */}
        <div className="space-y-12">
          {/* Default States */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Button States
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4 items-center">
              <div className="text-center space-y-3">
                <Button state="default" className="w-[139px] px-3">
                  Button
                </Button>
                <p className="text-sm text-muted-foreground">Default</p>
              </div>

              <div className="text-center space-y-3">
                <Button state="hover" className="w-[139px] px-3">
                  Button
                </Button>
                <p className="text-sm text-muted-foreground">Hover</p>
              </div>

              <div className="text-center space-y-3">
                <Button state="pressed" className="w-[139px] px-3">
                  Button
                </Button>
                <p className="text-sm text-muted-foreground">Pressed</p>
              </div>

              <div className="text-center space-y-3">
                <Button disabled className="w-[139px] px-3">
                  Button
                </Button>
                <p className="text-sm text-muted-foreground">Disabled</p>
              </div>

              <div className="text-center space-y-3">
                <Button loading className="w-[139px] px-3">
                  Button
                </Button>
                <p className="text-sm text-muted-foreground">Loading</p>
              </div>

              <div className="text-center space-y-3">
                <Button loading className="w-[139px] px-3"></Button>
                <p className="text-sm text-muted-foreground">Loading Only</p>
              </div>
            </div>
          </section>

          {/* Interactive Buttons */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Interactive Examples
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="bg-card py-6 rounded-lg">
                <h3 className="font-semibold mb-4">Standard Button</h3>
                <Button
                  leftIcon={true}
                  rightIcon={true}
                  loading={loadingStates.standard}
                  onClick={() => handleButtonClick("standard")}
                  className={loadingStates.standard ? "w-[139px]" : ""}
                >
                  Click Me
                </Button>
              </div>

              <div className="bg-card py-6 rounded-lg">
                <h3 className="font-semibold mb-4">Left Icon Only</h3>
                <Button
                  leftIcon={true}
                  rightIcon={false}
                  loading={loadingStates.leftIcon}
                  onClick={() => handleButtonClick("leftIcon")}
                >
                  Add Item
                </Button>
              </div>

              <div className="bg-card py-6 rounded-lg">
                <h3 className="font-semibold mb-4">Right Icon Only</h3>
                <Button
                  leftIcon={false}
                  rightIcon={true}
                  loading={loadingStates.rightIcon}
                  onClick={() => handleButtonClick("rightIcon")}
                  className="w-[139px]"
                >
                  Continue
                </Button>
              </div>

              <div className="bg-card py-6 rounded-lg">
                <h3 className="font-semibold mb-4">Icon Only</h3>
                <Button
                  iconOnly={true}
                  loading={loadingStates.iconOnly}
                  onClick={() => handleButtonClick("iconOnly")}
                  className="w-14"
                />
              </div>

              <div className="bg-card py-6 rounded-lg">
                <h3 className="font-semibold mb-4">No Icons</h3>
                <Button
                  leftIcon={false}
                  rightIcon={false}
                  loading={loadingStates.noIcons}
                  onClick={() => handleButtonClick("noIcons")}
                >
                  Text Only
                </Button>
              </div>

              <div className="bg-card py-6 rounded-lg">
                <h3 className="font-semibold mb-4">Disabled</h3>
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </section>

          {/* Animation Showcase */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Animation Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 mb-12">
              <div className="bg-card p-6 rounded-lg text-center">
                <h3 className="font-semibold mb-3">Hover Effects</h3>
                <Button>Hover Me</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Color & shadow on hover
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border text-center">
                <h3 className="font-semibold mb-3">Active Press</h3>
                <Button>Press Me</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Pressed state colors
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border text-center">
                <h3 className="font-semibold mb-3">Smooth Loading</h3>
                <Button loading>Loading</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Smooth spinner animation
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border text-center">
                <h3 className="font-semibold mb-3">Loading Only</h3>
                <Button loading></Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Centered spinner, no label
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border text-center">
                <h3 className="font-semibold mb-3">Smooth Corners</h3>
                <Button>iOS-Style</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Squircle corners (60% smoothing)
                </p>
              </div>
            </div>
          </section>

          {/* Design Tokens */}
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-foreground">
              Design Specifications
            </h2>
            <div className="bg-card p-6 rounded-lg border">
              <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-sm">
                <div>
                  <dt className="font-semibold text-foreground">Height</dt>
                  <dd className="text-muted-foreground">56px (3.5rem)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Border Radius
                  </dt>
                  <dd className="text-muted-foreground">16px (1rem)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Padding</dt>
                  <dd className="text-muted-foreground">
                    16px vertical, 12px horizontal
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Font</dt>
                  <dd className="text-muted-foreground">
                    Inter, 16px, 500 weight
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Icon Size</dt>
                  <dd className="text-muted-foreground">24px (1.5rem)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Gap</dt>
                  <dd className="text-muted-foreground">8px (0.5rem)</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Transition Duration
                  </dt>
                  <dd className="text-muted-foreground">300ms</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Easing</dt>
                  <dd className="text-muted-foreground">ease-out</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Hover Effects
                  </dt>
                  <dd className="text-muted-foreground">
                    Color & shadow transitions
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Corner Style
                  </dt>
                  <dd className="text-muted-foreground">
                    Squircle (iOS-style)
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">
                    Corner Smoothing
                  </dt>
                  <dd className="text-muted-foreground">60%</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
